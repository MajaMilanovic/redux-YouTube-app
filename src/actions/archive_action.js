import { ARCHIVE_VIDEO } from "../utils/constants";

export function archiveVideo(video) {
    return {
        type: ARCHIVE_VIDEO,
        payload: video
    }
}