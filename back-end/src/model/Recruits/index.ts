import { Sequelize, Op } from "sequelize";
import db from "db";
import { RecruitStatic, RecruitAttributes } from "db/model/Recruit";

interface RecruitInfo {
  company: string;
  title: string;
  url: string;
  startDate: string;
  endDate?: string;
  jobType: string;
}

class Recruits {
  private Recruit: RecruitStatic;

  constructor() {
    this.Recruit = db.Recruit;
  }

  public getPageList = async (
    searchTerm: string,
    tags: string[],
    offset: number,
    limit: number
  ): Promise<{ pageList: RecruitInfo[]; total: number }> => {
    const pageRows = await this.Recruit.findAll({
      attributes: [
        "company",
        "title",
        "url",
        [
          Sequelize.fn(
            "date_format",
            Sequelize.col("start_date"),
            "%Y-%m-%d %H:%i:%S"
          ),
          "startDate"
        ],
        [
          Sequelize.fn(
            "date_format",
            Sequelize.col("end_date"),
            "%Y-%m-%d %H:%i:%S"
          ),
          "endDate"
        ],
        [Sequelize.literal(`'신입/경력'`), "job_type"]
      ],
      where: { title: { [Op.like]: `%${searchTerm}%` } },
      offset,
      limit
    });

    const totalRecruits = await this.Recruit.findAndCountAll({
      where: { title: { [Op.like]: `%${searchTerm}%` } }
    });

    return {
      pageList: pageRows.map((row: any) => row.dataValues),
      total: totalRecruits.count
    };
  };
}

export default new Recruits();
