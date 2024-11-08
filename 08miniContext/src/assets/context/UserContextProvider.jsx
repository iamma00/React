import React from "react";
import userContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [use ] = useState(0)
    return(
        <UserContext>
        {children}
        </UserContext>
    )
}

export default  UserContextProvider;