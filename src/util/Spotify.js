let accessToken;
const clientId = 'd65d33e1a2594e12b3936739ca295c29';
const redirectURI = 'http://jamming-app.33m.io/';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else if (window.location.href.match(/access_token=([^&]*)/) &&
            window.location.href.match(/expires_in=([^&]*)/)) {

            accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
            let expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
    },

    search(term) {
        this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.tracks) {
                return jsonResponse.tracks.items.map((track) => {
                    return {
                        'id': track.id,
                        'name': track.name,
                        'artist': track.artists[0].name,
                        'album': track.album.name,
                        'uri': track.uri
                    };
                });
            } else {
                return [];
            }

        })
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris || trackUris.length === 0) {
            return;
        } else {
            let token = this.getAccessToken();
            let headers = {
                'Authorization': `Bearer ${accessToken}`
            };
            let userID = '';
            let playlistID = '';

            return fetch('https://api.spotify.com/v1/me', {
                headers: headers
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                userID = jsonResponse.id;
                const playlistsUrl = 'https://api.spotify.com/v1/users/' + userID + '/playlists';
                return fetch(playlistsUrl, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({
                        name: name
                    })
                }).then(response => {
                    return response.json();
                }).then(jsonResponse => {
                	playlistID = jsonResponse.id;
                    const tracksUrl = 'https://api.spotify.com/v1/users/' + userID + '/playlists/' + playlistID + '/tracks';
                    return fetch(tracksUrl, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({
                            uris: trackUris
                        })
                    }).then(response => {
                    	return response.json()
                    }).then(jsonResponse => {
                    	playlistID = jsonResponse.id;
                    })
                });
            });
        }
    }
};

export default Spotify;