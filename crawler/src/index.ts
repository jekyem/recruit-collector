import RecruitCrawler from './RecruitCrawler';
import RecruitService from './service/RecruitService';
import { getModules } from './RecruitCrawler/module/getModules';

(async () => {
  const recruitCrawler = new RecruitCrawler();
  const recruitService = await RecruitService.getInstance();
  const crawlingModules = await getModules();

  for (const module of crawlingModules) {
    const recruitsData = await recruitCrawler.getRecruitsData(module);
    await recruitService.updateRecruit(recruitsData, module.getModuleName());
  }

  await recruitCrawler.close();
})();
