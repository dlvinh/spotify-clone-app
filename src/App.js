import './App.css';
import Login from './Pages/Login/Login';
import { getToken } from './Services/Spotify';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LandingPage from './Pages/Home/LandingPage';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from "axios";

// Sau khi co duoc token  ta can lay cac gia tri cua spotify ex: artists, albums, playlist,... 
// Spotify communities has provided a list of libraries that help to get those properites quicker
//https://developer.spotify.com/documentation/web-api/libraries/

let spotify = new SpotifyWebApi();
function App() {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> {
    return state.AppState
  });
  //console.log(user);
  useEffect(() => { 
    const _USER_LOGIN = localStorage.getItem("USER_LOGIN");
    //const {access_token} = getToken(); // vi getToken sau khi reduce se tra ve mot object voi cac gia tri 
    if (_USER_LOGIN === null){
      const {access_token} = getToken();
      window.location.hash="";
      if (typeof(access_token) !== "undefined"){
          spotify.setAccessToken(access_token);
          spotify.getMe().then((info)=>{
           // console.log(info);
            localStorage.setItem("USER_LOGIN",JSON.stringify({info:info,token:access_token}));
            dispatch({  
              type: "SAVE_USER",
              data: {info:info,token:access_token},
            })
          });
      }
    }else{
   //   console.log(_TOKEN);
      dispatch({  
        type: "SAVE_USER",
        data: JSON.parse(_USER_LOGIN)
      })
    }
  }, [])
  
  return (
   <div className="app">
      {/* Login  */}
      {
        user.token ? (
          <LandingPage spotify={spotify}></LandingPage>
        ): <Login></Login>
      }
   </div>
  );
}

export default App;
