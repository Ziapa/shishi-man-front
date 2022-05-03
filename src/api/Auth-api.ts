import axios from "axios"


const instance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*"
    }
})

// api

export const AuthApi = {
    login(email: string, password: string) {
        const promise = instance.post("auth/login", {email, password})
        return promise
    },
    getUsers() {
        const promise = instance.get("users")
        return promise
    }
}