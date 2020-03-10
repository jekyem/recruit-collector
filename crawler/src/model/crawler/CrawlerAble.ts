import { Page } from 'puppeteer';
import { RecruitData } from 'model/Recruit';

export default interface CrawlerAble {
  getRecruitLists(page: Page): Promise<{ url: string; parm?: any }[]>;
  getRecruitData(page: Page, url: string, parm?: any): Promise<RecruitData>;
}
