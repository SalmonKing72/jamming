import React, { Component } from 'react';
//import { SearchBar } from ../SearchBar/SearchBar;
//import { SearchResults } from ../SearchResults/SearchResults;
//import { PlayList } from ../Playlist/Playlist;
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state.searchResults = [{
      id: 123
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }, {
      id: 456
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }];
    this.state.playlistName = 'testing!!!';
    this.state.playlistTracks = [{
      id: 789
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }, {
      id: 101112
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }];

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let trackExists = false;
    let myTracks = this.state.playlistTracks;
    myTracks.forEach((aTrack) => {
      if (playListTrack.id === track.id) {
        trackExists = true;
      }
    });

    if (!trackExists) {
      myTracks.unshift(track);
      this.setState(playlistTracks: myTracks);
    }
  }

  removeTrack(track) {
    let myTracks = this.state.playlistTracks.filter((aTrack) => aTrack.id !== track.id);
    this.setState(playlistTracks: myTracks);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <!-- Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
