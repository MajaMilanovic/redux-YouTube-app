import React from "react";

export const VideoListItem = ({ video }) => {
    return (
        <div className="div-videoListItem">
            <img src={video.snippet.thumbnails.high.url} alt="video-preview" />
            <span>{video.snippet.title}</span>
        </div>
    );
};