import fs from 'fs';
import path from 'path';
import CrawlingModule from '../CrawlingModule';
import Naver from './Naver';

export const getModules = (): CrawlingModule[] => {
  const modules: CrawlingModule[] = [new Naver()];

  return modules;
};

// export const getModules = async (): Promise<CrawlingModule[]> => {
//   const files = await fs.readdirSync(path.join(__dirname));
//   const modules: CrawlingModule[] = [];

//   for (const file of files) {
//     const CrawlModule = (await import(`./${file.substr(0, file.length - 3)}`)).default;
//     try {
//       const instance = new CrawlModule();
//       if (instance && (instance as CrawlingModule).getRecruitLists) modules.push(instance);
//     } catch (error) {}
//   }

//   return modules;
// };
