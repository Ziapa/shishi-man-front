import {Dispatch} from "react";
import {AuthApi} from "../api/Auth-api";

export type LoginActionType = LoginACType

type LoginACType = ReturnType<typeof loginAC>

export type InitialStateLoginType = {
    email: string
    password: string
    isAuth: boolean
    token: string
}

const initialState: InitialStateLoginType = {
    email: "",
    password: "",
    isAuth: false,
    token: ""
}

export const loginReducer = (state: InitialStateLoginType = initialState, action: LoginActionType) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,

            }

        default:
            return state
    }
}

//ActionCreators

export const loginAC = (email: string, password: string, token: string) => ({type: "LOGIN", payload: token}) as const

//THUNKCreators

export const loginTC = (email: string, password:string) => (dispatch: Dispatch<LoginActionType>) => {
    AuthApi.login(email, password)
        .then((res)=> {

        })
}

function login(login: any, arg1: void) {
    throw new Error("Function not implemented.");
}
