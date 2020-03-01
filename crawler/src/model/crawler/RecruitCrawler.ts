import { RecruitData } from 'model/Recruit';
import puppeteer from 'puppeteer';

import CrawlerAble from './CrawlerAble';

export default class RecruitCrawler {
  private browser: Promise<puppeteer.Browser>;

  constructor() {
    this.browser = puppeteer.launch({ headless: false });
  }

  public getRecruitDatas = async (module: CrawlerAble): Promise<Array<RecruitData>> => {
    const page = await (await this.browser).newPage();
    const recruitUrls = await module.getRecruitUrls(page);
    await page.close();

    const recruitDatas = recruitUrls.map(async (url: string) => {
      const page = await (await this.browser).newPage();
      const data = await module.getRecruitData(page, url);
      await page.close();

      return data;
    });

    return await Promise.all(recruitDatas);
  };

  public close = async (): Promise<void> => (await this.browser).close();
}
