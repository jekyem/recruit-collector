import Crawler from './model/Crawler';
import Recruit from './model/Recruit';
import { getModules } from './model/Crawler/module/getModules';

(async () => {
  const recruit = await Recruit.getInstance();
  const crawler = new Crawler();
  const crawlModules = await getModules();

  for (const module of crawlModules) {
    const recruitData = await crawler.getRecruitDatas(module);
    await recruit.insertRecruit(recruitData);
  }

  await crawler.close();
})();
