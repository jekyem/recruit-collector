import LoginTokenValidator from "./index";
import Axios from "axios";

import { UnValidateToken } from "../OauthError";
import NaverToken from "@src/data-type/LoginTokenType/NaverToken";

export default class NaverValidator implements LoginTokenValidator {
  validate = async (token: NaverToken): Promise<string> => {
    const res = await Axios.get("https://openapi.naver.com/v1/nid/me", {
      headers: { Authorization: `${token.type} ${token.token}` }
    });

    if (res.data.message === "success") {
      return res.data.response.email;
    } else {
      throw new UnValidateToken();
    }
  };
}
