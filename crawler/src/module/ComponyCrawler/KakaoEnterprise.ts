import puppeteer from 'puppeteer';
import fs from 'fs';

import CompanyInfo from '../InfoTypes/CompanyInfo';
import RecuritInfo from '../InfoTypes/RecuritInfo';
import CompanyCrawler from '.';
import db from '../db';

export default class KakaoEnterprise extends CompanyCrawler {
  constructor() {
    super(
      '카카오 엔터프라이즈',
      'https://www.kakaoenterprise.com/',
      'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/list',
    );
  }

  private clickTechMenu = async (page: puppeteer.Page) => {
    const menus = await page.$$('#divTabList li');
    let techBtn = null;

    for (const menu of menus) {
      const content = await menu.evaluate((node: Element) => node.textContent);
      if (content === '테크') {
        techBtn = menu;
        break;
      }
    }

    if (techBtn === null) throw new Error('there is no techBtn');
    techBtn.click();
  };

  protected parseRecruitList = async (page: puppeteer.Page): Promise<string[]> => {
    fs.writeFile('recruits.txt', '', () => {});
    await this.clickTechMenu(page);
    await page.waitForSelector('div.paging li');

    const maxPageIndex = (await page.$$('div.paging li')).length;
    let allUrls: string[] = [];

    for (let i = 0; i < maxPageIndex; i += 1) {
      await page.waitForSelector('div.paging li');
      await (await page.$(`div.paging li:nth-child(${i})`))?.click();
      await page.waitForSelector('h2.list-bbs-title a');

      const urls = await page.$$eval('h2.list-bbs-title a', (elements: any) =>
        elements.map((element: HTMLElement) => {
          const url = 'https://kakaoenterprise.recruiter.co.kr/app/jobnotice/view';
          const systemKindCode = element.getAttribute('data-systemkindcode');
          const jobNoticesn = element.getAttribute('data-jobnoticesn');

          return `${url}?systemKindCode=${systemKindCode}&jobnoticeSn=${jobNoticesn}`;
        }),
      );

      allUrls = allUrls.concat(urls);
      console.log(allUrls);
    }

    return allUrls;
  };

  private parseTitle = async (page: puppeteer.Page) =>
    page.evaluate(() => document.querySelector('span.view-bbs-title')?.textContent);

  private parseDate = async (page: puppeteer.Page) => {
    const recruitPeriod = await page.evaluate(() =>
      document.querySelector('span.view-bbs-date')?.textContent?.replace(/[ \r\n]/g, ''),
    );
    const startStr = `${recruitPeriod?.substr(0, 10)}T${recruitPeriod?.substr(13, 5)}`;
    const endStr = `${recruitPeriod?.substr(19, 10)}T${recruitPeriod?.substr(32, 5)}`;

    return {
      startDate: new Date(startStr),
      endDate: new Date(endStr),
    };
  };

  private getQualification = async (page: puppeteer.Page) => {
    const inputAreaFrame = await (await page.$('#viewSmartEditor'))?.contentFrame();
    const allLines = await inputAreaFrame?.$$('body p');

    let qualification = '';
    let append = false;

    if (allLines) {
      for (const line of allLines) {
        const isSubtitle = await line.evaluate((element: Element) => element.querySelector('b'));
        const content = await line.evaluate((element: Element) => element.textContent);

        if (append) {
          if (content?.replace(/[\xA0 \r\n]/g, '') === '') break;
          qualification += `${content}\n`;
        } else if (isSubtitle && content?.indexOf('지원자격') !== -1) {
          append = true;
        }
      }
    }

    return qualification;
  };

  protected parseRecruitInfo = async (page: puppeteer.Page): Promise<RecuritInfo> => {
    const title = await this.parseTitle(page);
    const url = page.url();
    // const position = '';
    const { startDate, endDate } = await this.parseDate(page);
    const qualification = await this.getQualification(page);

    db.Recruit.create({
      url,
      title,
      startDate,
      endDate,
      qualification,
      jobType: '-',
      createDate: new Date(),
    });

    return { name: 'page' };
  };
}
