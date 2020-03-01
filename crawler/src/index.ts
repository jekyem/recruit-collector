import KakaoEnterprise from './model/crawler/module/KakaoEnterprise';
import RecruitCrawler from './model/crawler/RecruitCrawler';
import Recruit from './model/Recruit';
import puppeteer from 'puppeteer';
import moment from 'moment';

(async () => {
  const recruit = await Recruit.getInstance();
  const crawler = new RecruitCrawler();

  const recruitData = await crawler.getRecruitDatas(new KakaoEnterprise());
  await crawler.close();

  await recruit.insertRecruit(recruitData);
})();
