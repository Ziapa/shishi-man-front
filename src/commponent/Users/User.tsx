import React from "react";

type UserPropsType = {
    email: string
    role: string
    ban: boolean
}

export const User = (props: UserPropsType) => {
    return (
        <div>
<div> {props.email} </div>
<div> {props.role} </div>
<div> {props.ban} </div>
<button> Deleted user </button>
<button> Ban user </button>
        </div>
    )
}