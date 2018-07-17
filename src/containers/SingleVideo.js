import React, { Component } from "react";
import { connect } from "react-redux";
import { embedVideoBaseUrl, initialMessageForSingleVideo } from "../utils/constants";

class SingleVideo extends Component {
    render() {

        if (!this.props.selectedVideo) {
            return <div>{initialMessageForSingleVideo}</div>
        }

        const url = `${embedVideoBaseUrl}${this.props.selectedVideo.id.videoId}`;
        const { description } = this.props.selectedVideo.snippet;

        return (
            <div>
                <div className="div-single-video">
                    <iframe src={url} />
                </div>
                <p className="p-single-video-description">{description}</p>
            </div>

        )
    }
}

function mapStateToProps({ selectedVideo }) {
    return { selectedVideo };
}

export default connect(mapStateToProps)(SingleVideo);