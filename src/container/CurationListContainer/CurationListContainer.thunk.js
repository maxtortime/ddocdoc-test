import { getCurationsListApi } from "../../api";
import {
  successCurationList,
  failureCurationList
} from "./CurationListContainer.action";

export const getCurationsList = () => dispatch => {
  getCurationsListApi()
    .then(({ data }) => {
      dispatch(successCurationList(data.items));
    })
    .catch(e => {
      dispatch(failureCurationList(e));
    });
};
