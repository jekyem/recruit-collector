import jwt from "jsonwebtoken";
import { Factory } from "./LoginTokenValidator";
import NaverToken from "@src/data-type/LoginTokenType/NaverToken";
import NoTokenKey from "./OauthError/NoTokenKey";

export default class OauthService {
  public static validateLoginTokenByExtractEmail = async (
    oauthSite: string,
    token: NaverToken
  ): Promise<string> => {
    const validator = Factory.getValidator(oauthSite);
    const email = validator.validate(token);
    return email;
  };

  public static makeAccessToken(email: string) {
    if (process.env.JWT_KEY) {
      const accessToken = jwt.sign({ email }, process.env.JWT_KEY);
      return accessToken;
    }
    throw new NoTokenKey();
  }
}
