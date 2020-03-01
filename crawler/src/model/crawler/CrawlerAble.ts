import { Page } from 'puppeteer';
import { RecruitData } from 'model/Recruit';

export default interface CrawlerAble {
  getRecruitUrls(page: Page): Promise<string[]>;
  getRecruitData(page: Page, url: String): Promise<RecruitData>;
}
