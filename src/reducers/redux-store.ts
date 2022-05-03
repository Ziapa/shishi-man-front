import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./loginReducer";

const reducer = combineReducers({
login: loginReducer,
})

type ReducersType = typeof reducer
export type AppStateType = ReturnType<ReducersType>

export const store = createStore(reducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store