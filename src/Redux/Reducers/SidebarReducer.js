const defaultState ={
    showSearch: false
}


export const SidebarState = (state=defaultState, action)=>{
    switch(action.type){
        case "SHOW_SEARCH":{
            //console.log("SHOW_SEARCH");
            return {...state,showSearch: true};
        }
        case "HIDE_SEARCH":{
           // console.log("HIDE_SEARCH");
            return {...state,showSearch:false};
        }
        default: return {...state}
    }
}