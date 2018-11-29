import {
  SUCCESS_CURATION_LIST,
  FAILURE_CURATION_LIST
} from "./CurationListContainer.action";

// 초기 상태를 정의합니다
const initialState = {
  curations: [],
  error: ""
};

function CurationListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_CURATION_LIST:
      return {
        ...state,
        curations: action.payload
      };
    case FAILURE_CURATION_LIST:
      return {
        ...state,
        error: "FAILURE_CURATION_LIST"
      };
    default:
      return state;
  }
}

export default CurationListContainerReducer;
