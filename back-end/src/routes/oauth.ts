import { Router } from "express";
import OauthService from "@src/service/OauthService";
import UserService from "@src/service/UserService";

const router = Router();

/*------------------------------
  method : post
  URI : /api/oauth/login
  parm : {
    oauthSite : String
    token : {
      type:string,
      token:string
    }
    offset : Number
    limit : Number
  }
------------------------------ */
router.post("/login", async (res, req) => {
  const { oauthSite, token } = res.body;
  try {
    const email = await OauthService.validateLoginTokenByExtractEmail(
      oauthSite,
      token
    );
    await UserService.registUserWhenNotExist(email);
    const pageToken = OauthService.makeAccessToken(email);

    req.status(200).json({ pageToken });
  } catch (error) {
    req.status(403).send(error.message);
  }
});

export default router;
