//reducer gets action and returns new piece of state

//get type value:
import { SEARCH_VIDEOS } from "../utils/constants";

export default function (state = [], action) {
    switch (action.type) {
        case SEARCH_VIDEOS:
            return action.payload;
    };
    return state;
};
