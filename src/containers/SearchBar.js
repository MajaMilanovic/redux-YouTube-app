import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchVideos } from "../actions/search_action";
import { inputSearchPlaceholder } from "../utils/constants";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }

        this.onInputSearch = this.onInputSearch.bind(this);
    }

    onInputSearch(e) {
        const searchTerm = e.target.value;
        this.setState({ searchTerm });

        //call action creator
        setTimeout(() => { this.props.searchVideos(searchTerm) }, 300);
    }


    render() {
        return (
            <div className="div-search-bar">
                <input
                    placeholder={inputSearchPlaceholder}
                    className="input-search"
                    onChange={this.onInputSearch}
                    value={this.state.searchTerm}
                    type="search"
                />
                <span>
                    <button className="button-search" type="submit">Search</button>
                </span>
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);