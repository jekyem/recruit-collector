import { Page } from 'puppeteer';
import RecruitData from 'DataType/RecruitData';

export default interface CrawlingModule {
  getRecruitLists(page: Page): Promise<{ url: string; parm?: any }[]>;
  getRecruitData(page: Page, url: string, parm?: any): Promise<RecruitData>;
}
