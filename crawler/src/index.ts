import RecruitCrawler from './RecruitCrawler';
import RecruitService from './service/RecruitService';
import { getModules } from './RecruitCrawler/module/getModules';

(async () => {
  const recruitService = await RecruitService.getInstance();
  const recruitCrawler = new RecruitCrawler();
  const crawlingModules = await getModules();

  for (const module of crawlingModules) {
    const recruitsData = await recruitCrawler.getRecruitsData(module);
    await recruitService.insertRecruit(recruitsData);
  }

  await recruitCrawler.close();
})();
