import models from "@src/models";

export default class UserService {
  public static registUserWhenNotExist = async (email: string) => {
    const user = await models.User.findOne({
      where: { email }
    });

    if (user === null) await UserService.registUser(email);
  };

  private static registUser = async (email: string) => {
    await models.User.create({ email });
  };
}
