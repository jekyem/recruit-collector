import * as Sequelize from "sequelize";

interface UserAttributes extends Sequelize.Model {
  email: string;
}

export type UserStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): UserAttributes;
};

export const userFactory = (sequelize: Sequelize.Sequelize) => {
  return <UserStatic>sequelize.define(
    "UserModel",
    {
      email: {
        type: new Sequelize.DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: "user",
      timestamps: false
    }
  );
};
