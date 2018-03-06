let accessToken;
const clientId = 'd65d33e1a2594e12b3936739ca295c29';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		} else if (window.location.href.match(/access_token=([^&]*)/) &&
			window.location.href.match(/expires_in=([^&]*)/)) {
			
			accessToken = window.location.href.match(/access_token=([^&]*)/)[0];
			let expiresIn = window.location.href.match(/expires_in=([^&]*)/)[0];
			
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
		} else {
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
		}
	}
};

export default Spotify;