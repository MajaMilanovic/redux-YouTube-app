//action creator to fetch from youtube;

import { API_KEY, SEARCH_VIDEOS } from "../utils/constants";
import youtubeSearch from "youtube-api-v3-search";


export function searchVideos(term) {
    const options = {
        q: term,
        part: 'snippet',
        type: 'video'
    }

    const request = youtubeSearch(API_KEY, options);

    //returns action object:

    return {
        type: SEARCH_VIDEOS,
        payload: request
    }


}



