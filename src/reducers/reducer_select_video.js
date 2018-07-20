import { SELECT_VIDEO } from "../utils/constants";

//reducer takes state and action and returns piece of state

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_VIDEO:
            return action.payload;
        default:
            return state;
    }
}