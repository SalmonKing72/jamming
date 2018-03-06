import React, { Component } from 'react';
import './SearchResults.css';


class SearchResults extends Component {
	render() {
		<div className="SearchResults">
		  <h2>Results</h2>
		  <TrackList tracks={this.props.searchResults} onAdd={this.propd.onAdd}/>
		</div>
	}
}

export default SearchResults;