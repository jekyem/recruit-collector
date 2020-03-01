import * as Sequelize from 'sequelize';

export interface RecruitAttributes extends Sequelize.Model {
  company: string;
  url: string;
  title: string;
  startDate?: Date;
  endDate?: Date;
  updateDate: Date;
}

export type RecruitStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): RecruitAttributes;
};

export const recruitFactory = (sequelize: Sequelize.Sequelize) => {
  return <RecruitStatic>sequelize.define(
    'RecruitModel',
    {
      company: {
        type: new Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
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
      updateDate: {
        type: Sequelize.DataTypes.DATE,
        field: 'update_date',
      },
    },
    {
      tableName: 'recruits',
      timestamps: false,
    },
  );
};
