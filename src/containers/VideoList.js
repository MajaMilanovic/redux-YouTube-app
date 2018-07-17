import React, { Component } from "react";
import { connect } from "react-redux";
import { initialMessageForVideoList } from "../utils/constants";
import { VideoListItem } from "../components/VideoListItem";
import { selectVideo } from "../actions/select_action";
import { bindActionCreators } from "redux";

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.renderVideoList = this.renderVideoList.bind(this);
        this.selectVideo = this.selectVideo.bind(this);
    }

    renderVideoList(list) {
        return list.items.map(item => {
            return (
                <li
                    onClick={() => { this.selectVideo(item) }}
                    key={item.etag}>
                    <VideoListItem video={item} />
                </li>)
        })
    }


    selectVideo(video) {
        //call action creator and send video to reducer via action object;
        this.props.selectVideo(video);
    }

    render() {

        if (this.props.videoList.length === 0) {
            return <div className="div-initial-video-list">{initialMessageForVideoList}</div>
        }

        return (
            <div className="div-video-list">
                <ul>
                    {this.renderVideoList(this.props.videoList)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ videoList }) {
    return { videoList };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectVideo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);