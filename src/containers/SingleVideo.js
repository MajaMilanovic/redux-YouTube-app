import React, { Component } from "react";
import { connect } from "react-redux";
import { embedVideoBaseUrl, initialMessageForSingleVideo } from "../utils/constants";
import { selectVideo } from "../actions/select_action";
import { bindActionCreators } from "redux";

class SingleVideo extends Component {
    constructor(props) {
        super(props);
        this.renderVideoHistory = this.renderVideoHistory.bind(this);
    }


    renderVideoHistory(recentVideos) {

        const recentVideosToDisplay = recentVideos.filter(video => {
            return JSON.stringify(video) !== JSON.stringify(this.props.selectedVideo);
        })

        return recentVideosToDisplay.map(video => {
            return (<li
                onClick={() => { this.props.selectVideo(video) }}
                key={video.etag}>
                <img src={video.snippet.thumbnails.default.url} alt="previous-video" />
                <span className="span-recent-video-title">{video.snippet.title}</span>
            </li>)
        })


    }

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
                {(this.props.videoHistory.length < 2)
                    ? ""
                    : <div>
                        <p>Previous videos: </p>
                        <ul className="list-previous-videos">
                            {this.renderVideoHistory(this.props.videoHistory)}
                        </ul>
                    </div>
                }
            </div>

        )
    }
}

function mapStateToProps({ selectedVideo, videoHistory }) {
    return { selectedVideo, videoHistory };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);