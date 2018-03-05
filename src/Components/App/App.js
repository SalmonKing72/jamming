import React, { Component } from 'react';
//import { SearchBar } from ../SearchBar/SearchBar;
//import { SearchResults } from ../SearchResults/SearchResults;
//import { PlayList } from ../Playlist/Playlist;
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state.searchResults = [{
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }, {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }];
    this.state.playlistName = 'testing!!!';
    this.state.playlistTracks = [{
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }, {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across The Water'
    }];
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <!-- Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
