import React from "react";
import {User} from "./User";

type UsersPropsType = {}

const ArrayUsers = [
    {email: "Smith", role: "ADMIN", ban: true},
    {email: "Dan", role: "USER", ban: true},
    {email: "Andrey", role: "Guest", ban: true},
]


export const Users = (props: UsersPropsType) => {
    return (
        <div>

            {ArrayUsers.map((el: { email: string, role: string, ban: boolean }, index:number ) => {
                return <User key={index} email={el.email} role={el.role} ban={el.ban}></User>
            })}


        </div>
    )
}