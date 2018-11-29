export const SUCCESS_CURATION_LIST = "SUCCESS_CURATION_LIST";
export const FAILURE_CURATION_LIST = "FAILURE_CURATION_LIST";

export const successCurationList = curations => ({
  type: SUCCESS_CURATION_LIST,
  payload: curations
});

export const failureCurationList = error => ({
  type: FAILURE_CURATION_LIST,
  payload: error
});
