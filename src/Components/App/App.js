import React, { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        searchResults: [{
          id: '123',
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water',
          uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp'
        }, {
          id: '456',
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water',
          uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp'
        }],
        playlistName: 'testing!!!',
        playlistTracks: [{
          id: '789',
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water',
          uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp'
        }, {
          id: '101112',
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water',
          uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp'
        }]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let trackExists = false;
    let myTracks = this.state.playlistTracks;
    myTracks.forEach((aTrack) => {
      if (aTrack.id === track.id) {
        trackExists = true;
      }
    });

    if (!trackExists) {
      myTracks.unshift(track);
      this.setState({
        playlistTracks: myTracks
      });
    }
  }

  removeTrack(track) {
    let myTracks = this.state.playlistTracks.filter((aTrack) => aTrack.id !== track.id);
    this.setState({
      playlistTracks: myTracks
    });
  }

  updatePlayListName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map((track) => {
      return track.uri;
    });
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.onSearch}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlayListName}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
