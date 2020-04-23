import RecruitInfo from "model/RecruitInfo";
import axios from "axios";
import NaverToken from "login-module/naver-login/NaverToken";

export interface GetRecruits {
  recruits: RecruitInfo[];
  total: number;
}
const getRecruits = async (
  term: string,
  offset: number,
  limit: number
): Promise<GetRecruits> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACK_END_URL}/api/recruits`,
      { params: { term, offset, limit } }
    );

    const { recruits, total } = response.data;
    return { recruits, total };
  } catch (e) {
    throw e;
  }
};

const login = async (oauthSite: string, token: NaverToken): Promise<string> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACK_END_URL}/api/oauth/login`,
      { oauthSite, token }
    );

    return response.data.pageToken;
  } catch (e) {
    throw e;
  }
};

export default { getRecruits, login };
