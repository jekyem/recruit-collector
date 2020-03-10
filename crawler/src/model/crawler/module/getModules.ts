import fs from 'fs';
import path from 'path';
import CrawlerAble from '../CrawlerAble';

export const getModules = async (): Promise<CrawlerAble[]> => {
  const files = await fs.readdirSync(path.join(__dirname));
  const modules: CrawlerAble[] = [];

  for (const file of files) {
    const CrawlModule = (await import(`./${file.substr(0, file.length - 3)}`)).default;
    try {
      const instance = new CrawlModule();
      if (instance && (instance as CrawlerAble).getRecruitLists) modules.push(instance);
    } catch (error) {}
  }

  return modules;
};
