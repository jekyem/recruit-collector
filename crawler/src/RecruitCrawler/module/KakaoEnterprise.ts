import { Page, ElementHandle } from 'puppeteer';
import moment from 'moment';

import CrawlingModule from 'RecruitCrawler/CrawlingModule';
import RecruitData from 'DataType/RecruitData';

const RECRUIT_LIST_PAGE_URL = 'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/list';
const RECRUIT_NOTIFICATION_PAGE_URL = 'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/view';

export default class KakaoEnterprise implements CrawlingModule {
  private moduleName = '카카오 엔터프라이즈';

  public getRecruitLists = async (page: Page): Promise<{ url: string; parm?: any }[]> => {
    await page.goto(RECRUIT_LIST_PAGE_URL);
    await page.waitFor(500);
    await page.waitForSelector('div#divTabList');

    //Click Tech Menu
    const techMenu = (await page.$x('//*[@id="divTabList"]/ul/li[2]/a'))[0];
    techMenu.click();
    await page.waitForSelector('div.paging li');
    //---------
    const recruitUrls: { url: string }[] = [];
    let pageIndex = 1;
    let nextPageButton: ElementHandle | null = await page.$(
      `div.paging li:nth-child(${pageIndex})`,
    );

    while (nextPageButton) {
      await nextPageButton.click();
      await page.waitForSelector(`div.paging li:nth-child(${pageIndex}) a.active`);

      const extractedURL = await this.extractRecruitUrls(page);
      recruitUrls.push(...extractedURL.map(url => ({ url })));

      nextPageButton = await page.$(`div.paging li:nth-child(${++pageIndex})`);
    }

    return recruitUrls;
  };

  private extractRecruitUrls = async (page: Page): Promise<string[]> => {
    const recruitUrls = await page.$$eval('h2.list-bbs-title a', (elements: any) =>
      elements.map((element: HTMLElement) => {
        const systemKindCode = element.getAttribute('data-systemkindcode');
        const jobNoticesn = element.getAttribute('data-jobnoticesn');

        return `${'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/view'}?systemKindCode=${systemKindCode}&jobnoticeSn=${jobNoticesn}`;
      }),
    );

    return recruitUrls;
  };

  public async getRecruitData(page: Page, url: string): Promise<RecruitData> {
    await page.goto(url);
    const company = '카카오 앤터프라이즈';
    const title = await page.evaluate(
      () => document.querySelector('span.view-bbs-title')?.textContent,
    );
    const { startDate, endDate } = await this.extractDate(page);
    const contents = await this.extractContent(page);

    return {
      company,
      url,
      title: title ? title : '',
      startDate,
      endDate,
      contents: contents ? contents : '',
    };
  }

  public getModuleName = () => this.moduleName;

  private extractDate = async (page: Page) => {
    const recruitPeriod = await page.evaluate(() =>
      document.querySelector('span.view-bbs-date')?.textContent?.replace(/[ \r\n]/g, ''),
    );
    const startStr = `${recruitPeriod?.substr(0, 10)}T${recruitPeriod?.substr(13, 5)}`;
    const endStr = `${recruitPeriod?.substr(19, 10)}T${recruitPeriod?.substr(32, 5)}`;

    return {
      startDate: moment(startStr),
      endDate: moment(endStr),
    };
  };

  private extractContent = async (page: Page) => {
    const contentFrame = await (await page.$('#viewSmartEditor'))?.contentFrame();
    const contentBody = await contentFrame?.$('body');
    return await contentBody?.evaluate((element: Element) => element.textContent);
  };
}
