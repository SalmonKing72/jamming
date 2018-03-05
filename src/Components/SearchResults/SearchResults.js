import React, { Component } from 'react';
import './SearchResults.css';


class SearchResults extends Component {
	render() {
		<div className="SearchResults">
		  <h2>Results</h2>
		  <TrackList tracks={this.props.searchResults}
		</div>
	}
}

export default SearchResults;