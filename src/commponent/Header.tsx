import {Link} from "react-router-dom";
import React from "react";
// import s from "./Header.module.css"
type HeaderPropsType = {}

const linkStyle = {
    color: "red",
    textDecoration: "none",
    backgroundColor: "black",
    padding: "15px"
}


const menu = [
    {title: "Login", link: "login"},
    {title: "Registration", link: "registration"},
    {title: "Users", link: "users"}

]


export const Header = (props: HeaderPropsType) => {
    return (
        <main>


            {menu.map((el: { title: string, link: string }) =>
                <Link style={linkStyle} to={el.link}>{el.title}</Link>
            )}

            <h1>Header</h1>

        </main>
    )
}