import {Link} from "react-router-dom";
import React from "react";

type HeaderPropsType = {

}

const menu = {
    title: [1, 2, 3]
}


export const Header = (props: HeaderPropsType) => {
    return (
        <main>
            <Link to="/expenses">Expenses</Link>
            <Link to="/expenses">Expenses</Link>
            <Link to="/header">Header</Link>

            {menu.title.map((el: number) =>  <div> {el} </div>)}
            Hello world!!!

        </main>
    )
}