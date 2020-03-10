import { RecruitData } from 'model/Recruit';
import puppeteer from 'puppeteer';

import CrawlerAble from './CrawlerAble';

export default class Crawler {
  private browser: Promise<puppeteer.Browser>;
  private pageSize: number = 10;

  constructor() {
    this.browser = puppeteer.launch({ headless: false });
  }

  public getRecruitDatas = async (module: CrawlerAble): Promise<Array<RecruitData>> => {
    const page = await (await this.browser).newPage();
    const recruitList = await module.getRecruitLists(page);
    await page.close();

    const recruitDatas: RecruitData[] = [];
    for (let i = 0; i < recruitList.length; i += this.pageSize) {
      const subUrls = recruitList.splice(i, this.pageSize);

      const subRecruitData = await Promise.all(
        subUrls.map(async item => {
          const page = await (await this.browser).newPage();
          const data = await module.getRecruitData(page, item.url, item.parm);
          await page.close();

          return data;
        }),
      );

      recruitDatas.push(...subRecruitData);
    }

    return recruitDatas;
  };

  public close = async (): Promise<void> => (await this.browser).close();
}
