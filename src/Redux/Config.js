import { configureStore } from "@reduxjs/toolkit";
import { AppState,  } from "./Reducers/AppReducer";

// const rootReducer = combineReducers({
//     AppState: AppStateReducer
// });

export const store = configureStore({
    reducer: {
        AppState: AppState
    }
})