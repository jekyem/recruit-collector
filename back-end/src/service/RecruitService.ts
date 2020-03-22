import { Sequelize, Op } from "sequelize";
import moment from "moment";
import db from "@src/models";
import { RecruitStatic } from "@src/models/Recruit";

interface RecruitInfo {
  company: string;
  title: string;
  url: string;
  startDate: string;
  endDate?: string;
  pageIsOpen: number;
  jobType: string;
}

class RecruitService {
  private Recruit: RecruitStatic;

  constructor() {
    this.Recruit = db.Recruit;
  }

  public getRecruits = async (
    searchTerm: string,
    tags: string[],
    offset: number,
    limit: number
  ): Promise<RecruitInfo[]> => {
    // Get PageList from DB
    const pageRows = await this.Recruit.findAll({
      attributes: [
        "company",
        "url",
        "title",
        "startDate",
        "endDate",
        "pageIsOpen"
      ],
      where: { title: { [Op.like]: `%${searchTerm}%` } },
      offset,
      limit
    });

    // return make Value
    const recruits = pageRows.map((row: any) => {
      const {
        company,
        url,
        title,
        startDate,
        endDate,
        pageIsOpen
      } = row.dataValues;

      return {
        company,
        url,
        title,
        startDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
        endDate: moment(endDate).format("YYYY-MM-DD HH:mm:ss"),
        pageIsOpen,
        jobType: ""
      };
    });

    return recruits;
  };

  public countRecruits = async (
    searchTerm: string,
    tags: string[]
  ): Promise<number> => {
    const recruits = await this.Recruit.findAndCountAll({
      where: { title: { [Op.like]: `%${searchTerm}%` } }
    });

    return recruits.count;
  };
}

export default new RecruitService();
