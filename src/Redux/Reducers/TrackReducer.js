const defautState = {
    tracks:{}
}

export const TrackState = (state=defautState, action)=>{
    switch(action.type){
        case "SAVE_TRACK":{
            console.log("SAVE_TRACKS",action.data);
            let clone = {...state.tracks};
            clone = action.data;
            return {...state, tracks: clone};
        }
        default: return {...state};
    }
}