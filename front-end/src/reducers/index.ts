import { combineReducers } from "redux";
import recruitListReducer, { RecruitListReducer } from "./recruitListReducer";
import searchBoxReducer, { SearchBoxReducer } from "./searchBoxReducer";
import pageReducer, { PageReducer } from "./pageReducer";

export interface RootReducer {
  recruitListReducer: RecruitListReducer;
  searchBoxReducer: SearchBoxReducer;
  pageReducer: PageReducer;
}

export default combineReducers<RootReducer>({
  recruitListReducer,
  searchBoxReducer,
  pageReducer,
});
