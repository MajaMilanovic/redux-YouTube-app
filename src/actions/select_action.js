import { SELECT_VIDEO } from "../utils/constants";

//action creator is function that returns object action which has type property

export function selectVideo(video) {
    return {
        type: SELECT_VIDEO,
        payload: video
    }
}