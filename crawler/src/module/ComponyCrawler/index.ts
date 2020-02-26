import puppeteer from 'puppeteer';
import RecuritInfo from '../InfoTypes/RecuritInfo';
// import CompanyInfo from '../InfoTypes/CompanyInfo';

export default abstract class CompanyCrawler {
  protected companyName: string;

  protected companyPageURL: string;

  protected recruitListPageURL: string;

  constructor(companyName: string, companyPageURL: string, recruitListPageURL: string) {
    this.companyName = companyName;
    this.companyPageURL = companyPageURL;
    this.recruitListPageURL = recruitListPageURL;
  }

  // public getComponyInfo = async (): Promise<CompanyInfo> => {
  //   return { name: '' };
  // };

  public getRecruits = async (): Promise<Array<RecuritInfo>> => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

    await page.goto(this.recruitListPageURL);
    const recruitURLs = await this.parseRecruitList(page);

    const recruits = [];

    for (const url of recruitURLs) {
      await page.goto(url);
      recruits.push(await this.parseRecruitInfo(page));
    }

    browser.close();
    return recruits;
  };

  protected abstract async parseRecruitList(page: puppeteer.Page): Promise<Array<string>>;

  protected abstract async parseRecruitInfo(page: puppeteer.Page): Promise<RecuritInfo>;
}
