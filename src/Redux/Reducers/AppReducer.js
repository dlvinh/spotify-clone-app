const defaultState = {
    user:{
        token:"",
        info:{}
    },
    playlists:[],
    playing:false,
    item:null
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
        default: return {...state};
    }
    
}