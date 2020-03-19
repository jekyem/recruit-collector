import moment, { Moment } from 'moment';

import db from '../models';
import RecruitData from 'DataType/RecruitData';

export default class RecruitService {
  private static _instance: RecruitService;

  /*--------------------------------
      Private Method
  --------------------------------*/
  private static init = async (): Promise<void> => {};

  /*--------------------------------
      Public Method
  --------------------------------*/
  public static getInstance = (): RecruitService => {
    if (!RecruitService._instance) {
      RecruitService._instance = new RecruitService();
      //   await Recruit.init();
    }
    return RecruitService._instance;
  };

  public updateRecruit = async (datas: RecruitData[], moduleName: string) => {
    // 기존 Recruit Close
    const recruitModel = db.Recruit;
    await recruitModel.update({ isOpen: 0 }, { where: { crawlerName: moduleName } });

    // 크롤링 데이터 Merge
    const rows = datas.map(data => ({
      crawlerName: moduleName,
      company: data.company,
      url: data.url,
      title: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      pageIsOpen: 1,
      updateDate: moment(),
    }));

    await recruitModel.bulkCreate(rows, {
      updateOnDuplicate: [
        'crawlerName',
        'company',
        'title',
        'startDate',
        'endDate',
        'pageIsOpen',
        'updateDate',
      ],
    });
  };
}
