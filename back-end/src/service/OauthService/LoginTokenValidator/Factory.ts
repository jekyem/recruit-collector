import NaverValidator from "./NaverValidator";
import { NotSupportSite } from "../OauthError";

export const getValidator = (oauthSite: string) => {
  switch (oauthSite) {
    case "naver":
      return new NaverValidator();
    default:
      throw new NotSupportSite();
  }
};
