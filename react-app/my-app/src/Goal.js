import React, { useState } from "react";

function Goal ({ userInfo }) {

    return (
        <div>
            <h2>Welcome {userInfo.name}</h2>
        </div>
    )
}

export default Goal