import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends Component {

	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}

	render() {
		return (
			<div className="Playlist">
			  <input defaultValue={this.props.playlistName} onChange={this.handleNameChange}/>
			  <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval/>
			  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
			</div>
		);
	}
}