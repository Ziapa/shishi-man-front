import {Input} from "../generalComponent/Input/Input"
import {ChangeEvent, useState} from "react";
import {AuthApi} from "../../api/Auth-api";


export default function Login() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === "email") {
            setEmail(e.currentTarget.value)
        } else if (e.currentTarget.id === "password") {
            setPassword(e.currentTarget.value)
        }

    }

    const login = (email: string, password: string) => {
        AuthApi.login(email, password)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                console.log(res.data.token)
                console.log(localStorage.getItem("1"))
            })
    }
    const getUsers = () => {
        AuthApi.getUsers()
            .then((res) => {
                console.log(res.data)
            })
    }

    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Login</h2>
            <div>
                <Input label={"email"} id={"email"} value={email} onChange={onChangeHandler}></Input>
                <Input label={"password"} id={"password"} value={password} onChange={onChangeHandler}></Input>
                <button onClick={() => login(email, password)}> Login</button>
                <button onClick={getUsers}> GetUsers</button>
            </div>

        </main>
    );
}


