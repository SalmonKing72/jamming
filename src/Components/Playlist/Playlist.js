import React, { Component } from 'react';
// import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends Component {
	render() {
		<div className="Playlist">
		  <input defaultValue={'New Playlist'}/>
		  <TrackList tracks={this.props.playlistTracks}/>
		  <a className="Playlist-save">SAVE TO SPOTIFY</a>
		</div>
	}
}