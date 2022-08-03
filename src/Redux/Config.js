import { configureStore } from "@reduxjs/toolkit";
import { AppState,  } from "./Reducers/AppReducer";
import { SidebarState } from "./Reducers/SidebarReducer";
import { TrackState } from "./Reducers/TrackReducer";

// const rootReducer = combineReducers({
//     AppState: AppStateReducer
// });

export const store = configureStore({
    reducer: {
        AppState: AppState,
        SidebarState: SidebarState,
        TrackState:TrackState
    }
})