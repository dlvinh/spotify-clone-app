//https://developer.spotify.com/documentation/web-playback-sdk/
//

// Endpoint -> using spotify authentication to let user login
//https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
// 1. Click login button -> redirect to spotify login page
// 2. then redirect to localhost 
export const authenEndPoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clientId = "6361ac79b5364cc6ab894fdedd70d4b1";

// https://developer.spotify.com/documentation/general/guides/authorization/scopes/
// scope give user who using this clone can perform those following function 
const scopes = [
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-top-read",
    "user-modify-playback-state"
];

export const loginUrl = `${authenEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`