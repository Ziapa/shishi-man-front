import {Link} from "react-router-dom";
import React from "react";
import s from "./Header.module.css"


type HeaderPropsType = {

}

const menu = [
    {title: "Login", link: "login"},
    {title: "Registration", link: "registration"},
    {title: "Users", link: "users"},
]

const logOut = () => {
    localStorage.removeItem("token")
    console.log(localStorage.getItem("token"))
}

export const Header = (props: HeaderPropsType) => {
    return (
        <main>

            {menu.map((el: { title: string, link: string }, index:number) =>
                <Link className={s.link} key={index}  to={el.link}>{el.title}</Link>
            )}

            <button onClick={logOut} >log out</button>

            <h1>Header</h1>

        </main>
    )
}