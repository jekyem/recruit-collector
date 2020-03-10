import { Moment } from 'moment';
import moment from 'moment';

import db from '../db';

export interface RecruitData {
  company: string;
  url: string;
  title: string;
  startDate: Moment;
  endDate: Moment | null;
  contents?: string;
}

export default class Recruit {
  private static _instance: Recruit;

  public static getInstance = (): Recruit => {
    if (!Recruit._instance) {
      Recruit._instance = new Recruit();
      //   await Recruit.init();
    }
    return Recruit._instance;
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
