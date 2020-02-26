const RecruitAction = {
  GET_RECRUITS_REQUEST: "GET_RECRUITS_REQUEST",
  GET_RECRUITS_SUCCESS: "GET_RECRUITS_SUCCESS",
  GET_RECRUITS_FAILURE: "GET_RECRUITS_FAILURE"
};

export const requestRecruit = (
  searchTerm: string,
  offset: number,
  limit: number
) => {
  return {
    type: RecruitAction.GET_RECRUITS_REQUEST,
    payload: {
      searchTerm,
      offset,
      limit
    }
  };
};

export default RecruitAction;
