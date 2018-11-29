import { combineReducers } from "redux";

import CurationListContainerReducer from "../container/CurationListContainer/CurationListContainer.reducer";

const reducers = combineReducers({
  curationListContainer: CurationListContainerReducer
});

export default reducers;
