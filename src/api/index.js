import axios from "axios";

export const getCurationsListApi = () => {
  return axios.get("https://api.ddocdoc.com/v2/eventBanner?populate=true");
};
