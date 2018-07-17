import { ARCHIVE_VIDEO } from "../utils/constants";

export default function (state = [], action) {

    switch (action.type) {
        case ARCHIVE_VIDEO:
            return [action.payload, ...state]
    }


    return state;
}