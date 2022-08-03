const defaultState = {
    user:{
        token:"",
        info:{}
    },
    playlists:[],
    playing:false,
    item:null,
    shows:[],
    artists:[]
};

export const AppState = (state=defaultState, action)=>{
    switch (action.type) {
        case "SAVE_USER":{
           // console.log("SAVE_TOKEN",action.data);
            let userClone = {...state.user};
            userClone = action.data;
            return {...state, user: userClone};
        }
        case "SAVE_PLAYLIST":{
          //  console.log("SAVE_PLAYLISTS",action.data);
            let playlistClone = [...state.playlists];
            playlistClone = action.data;
            return {...state,playlists:playlistClone};
        }
        case "SAVE_SHOWS":{
            let cloneShows = [...state.shows];
            cloneShows = action.data;
            return {...state,shows:cloneShows};
        }
        case "SAVE_ARTISTS":{
            console.log("SAVE_ARTISTS",action.data);
            let clone = [...state.artists];
            clone = action.data;
            return {...state,artists:clone};
        }
        default: return {...state};
    }
    
}