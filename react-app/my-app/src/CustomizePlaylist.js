import React, { useState } from "react";

function CustomizePlaylist () {

    const genres = ["party", "self-discovery", "exercise"]

    function createForms (section) {
        const list = genres.map((genre, index) =>
        <form>
            <input key={index} type="checkbox" id={genre} name={genre} value={genre} />
            <label for={genre}>{genre}</label>
        </form>
        )
        return <div>
            <h3>{section}</h3>
            {list}
            </div>
    }

    return (
        <div className="customize-playlist-form">
            <h2>Welcome User</h2>
            {createForms("Pop")}
            {createForms("Rap/Hip-Hop")}
        </div>
    )
}

export default CustomizePlaylist