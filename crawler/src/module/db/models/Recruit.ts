import * as Sequelize from 'sequelize';

interface RecruitAttributes extends Sequelize.Model {
  url: string;
  title: string;
  startDate?: Date;
  endDate?: Date;
  qualification: string;
  jobType: string;
  createDate: Date;
}

export type RecruitStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): RecruitAttributes;
};

// eslint-disable-next-line import/prefer-default-export
export const recruitFactory = (sequelize: Sequelize.Sequelize) => {
  return <RecruitStatic>sequelize.define(
    'RecruitModel',
    {
      url: {
        type: new Sequelize.DataTypes.STRING(300),
        primaryKey: true,
      },
      title: {
        type: new Sequelize.DataTypes.STRING(1000),
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DataTypes.DATE,
        field: 'start_date',
      },
      endDate: {
        type: Sequelize.DataTypes.DATE,
        field: 'end_date',
      },
      qualification: {
        type: new Sequelize.DataTypes.STRING(10000),
        allowNull: false,
      },
      jobType: {
        type: new Sequelize.DataTypes.STRING(20),
        allowNull: false,
        field: 'job_type',
      },
      createDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        field: 'create_date',
      },
    },
    {
      tableName: 'recruits',
      timestamps: false,
    },
  );
};
