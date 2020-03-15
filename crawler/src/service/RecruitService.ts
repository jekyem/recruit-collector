import moment, { Moment } from 'moment';

import db from '../models';
import RecruitData from 'DataType/RecruitData';

export default class RecruitService {
  private static _instance: RecruitService;

  public static getInstance = (): RecruitService => {
    if (!RecruitService._instance) {
      RecruitService._instance = new RecruitService();
      //   await Recruit.init();
    }
    return RecruitService._instance;
  };

  private static init = async (): Promise<void> => {};
  public insertRecruit = (datas: RecruitData[]) => {
    const rows = datas.map(data => ({
      company: data.company,
      url: data.url,
      title: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      updateDate: moment(),
    }));

    db.Recruit.bulkCreate(rows, {
      updateOnDuplicate: ['company', 'title', 'startDate', 'endDate'],
    });
  };
}
