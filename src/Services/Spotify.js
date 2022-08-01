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
    "user-modify-playback-state",
    "user-read-recently-played"
];

export const getToken = () =>{
    //console.log("hash",window.location.hash);
    let UrlHash = window.location.hash.substring(1).split("&").reduce((initial, item)=>{
        let parts = item.split("=");
       // console.log("parts",parts);
        initial[parts[0]] = decodeURIComponent(parts[1]);
        //console.log("initial",initial);
        return initial
    },{})
    // console.log("hash",window.location.hash.substring(1));// substring(1) to delete # icon
    // console.log("hash",window.location.hash.substring(1).split("&") ) // split se tra ve mot array chua cac gia tri duoc splitted by & icon
    // console.log("hash",window.location.hash.substring(1).split("&").reduce((initial,item)=>{
    //     let parts = item.split("=");
    //     console.log("parts",parts);
    //     initial[parts[0]] = decodeURIComponent(parts[1]);
    //     console.log("initial",initial);
    //     return initial
    // },{})) 
    // after reduce se tra ve mot object voi cac propertise: {access_token, expires_in, token_type}
    return UrlHash;
}


export const loginUrl = `${authenEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

