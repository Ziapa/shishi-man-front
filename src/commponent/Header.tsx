import {Link} from "react-router-dom";
import React from "react";
import s from "./Header.module.css"
type HeaderPropsType = {

}



const menu = {
    title: [{title: "Login", link: "login"},
        {title: "Registration", link: "registration"},
    ]
}


export const Header = (props: HeaderPropsType) => {
    return (
        <main>


            {menu.title.map((el: { title: string, link: string }) =>
                <Link className={s.linkStyle} to={el.link}>{el.title}</Link>
            )}

            <h1>Header</h1>

        </main>
    )
}