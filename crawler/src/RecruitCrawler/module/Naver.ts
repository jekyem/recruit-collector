import { Page } from 'puppeteer';
import moment from 'moment';

import CrawlingModule from '../CrawlingModule';
import RecruitData from 'DataType/RecruitData';

const RECRUIT_LIST_PAGE_URL = 'https://recruit.navercorp.com/naver/job/list/developer';

interface CompanyHash {
  [key: string]: string;
}

interface ParmType {
  period: string;
  company: string;
}

export default class Naver implements CrawlingModule {
  private logoToCompanyTitle: CompanyHash = {};
  private baseURL: string = 'https://recruit.navercorp.com/';

  constructor() {
    this.logoToCompanyTitle = this.initialTitleHash();
  }

  private initialTitleHash(): CompanyHash {
    const titleHash: CompanyHash = {};
    titleHash['/img/common/sml_SN_ci.png'] = '네이버';
    titleHash['/img/common/sml_KR_ci.png'] = '네이버 스노우';
    titleHash['/img/common/sml_NL_ci.png'] = '네이버 랩스';
    titleHash['/img/common/sml_WM_ci.png'] = '네이버 웍스 모바일';
    titleHash['/img/common/sml_NB_ci.png'] = '네이버 비지니스 플랫폼';

    return titleHash;
  }

  public getRecruitLists = async (page: Page): Promise<{ url: string; parm: ParmType }[]> => {
    await page.goto(RECRUIT_LIST_PAGE_URL);
    let moreDiv = await page.waitForSelector('#moreDiv');

    // List 전부 펴기
    while (true) {
      const styleValue = await moreDiv.evaluate(elemnet => elemnet.getAttribute('style'));
      if (styleValue === 'display: none;') break;

      const moreBtn = await moreDiv.$('button');
      await moreBtn?.click();
      await page.waitFor(200);
      moreDiv = await page.waitForSelector('#moreDiv');
    }

    // 크롤링 시작
    return await page.$$eval(
      '#jobListDiv ul li',
      (elemnets: Element[], that: Naver) => {
        return elemnets
          .map((element: Element) => {
            const url = element.querySelector('a')?.getAttribute('href');
            const period = element.querySelector('em.crd_date')?.textContent;
            const logoSrc = element.querySelector('span.crd_ci img')?.getAttribute('src');
            if (!(url && period && logoSrc))
              throw new Error('채용공고 리스트 정보가 잘못 되었습니다.');

            return {
              url,
              parm: {
                period: period.substr(-21),
                company: that.logoToCompanyTitle[logoSrc],
              },
            };
          })
          .filter(item => item.url !== '');
      },
      this,
    );
  };

  public getRecruitData = async (page: Page, url: string, parm: ParmType): Promise<RecruitData> => {
    await page.goto(this.baseURL + url);

    const company = parm.company;
    const title = await page.evaluate(
      () => document.querySelector('div.dtl_tit_con strong')?.textContent,
    );
    const contents = await page.evaluate(() =>
      document.querySelector('div.dtl_context div.context_area')?.textContent?.trim(),
    );
    const startDate = await page.evaluate(
      () => document.querySelector('div.dtl_context dl.dtl_date dd')?.textContent,
    );
    const endDate = parm.period === '상시모집' ? null : parm.period.substr(11);

    if (!(title && startDate)) throw new Error('네이버 채용공고 파싱에러 발생');
    return {
      company,
      url: this.baseURL + url,
      title,
      startDate: moment(startDate, 'YYYY.MM.DD'),
      endDate: endDate ? moment(endDate, 'YYYY.MM.DD') : null,
      contents,
    };
  };
}
