//here we assemble pieces of state from all reducers;

import { combineReducers } from "redux";
import searchVideosReducer from "./reducer_search_videos";
import selectVideoReducer from "./reducer_select_video";

const rootReducer = combineReducers({
    videoList: searchVideosReducer,
    selectedVideo: selectVideoReducer
});

export default rootReducer;

