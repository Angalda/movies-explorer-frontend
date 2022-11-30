import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function ProtectedRoute({children }) {
    const isLoggedIn = localStorage.getItem("jwt");
    return (
        <Route>
            { () => isLoggedIn ? children : <Redirect to="/" />}
        </Route>
    )
}

localStorage.getItem("jwt")