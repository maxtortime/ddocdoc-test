import axios from "axios";

export const getPromotionListApi = () => {
  return axios.get("https://api.ddocdoc.com/v2/eventBanner?populate=true");
};
