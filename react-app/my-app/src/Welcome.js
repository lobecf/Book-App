import React, { useReducer } from "react";

function Welcome ({ userInfo }) {

    return (
        <div>
            <p> Welcome {userInfo.name} </p>
            <p> View Profile </p>
            <p> View Preloaded Playlist </p>
        </div>

    );
}

export default Welcome