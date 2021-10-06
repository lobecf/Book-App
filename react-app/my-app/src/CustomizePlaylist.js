import React, { useState } from "react";
import { Link } from "react-router-dom";

function CustomizePlaylist () {


    const genres = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]

    function createForms (section) {
        const list = genres.map((genre, index) =>
        <form>
            <input key={index} 
            type="checkbox" 
            id={genre} 
            name={genre} 
            value={genre} 
            onChange={() => handleOnChange(index)}/>
            <label for={genre}>{genre}</label>
        </form>
        )
        return <div>
            <h3>{section}</h3>
            {list}
            </div>
    }

    const [checkedState, setCheckedState] = useState(
        new Array(genres.length).fill(false)
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    }

    const handleSubmit = (e) => {
        setCheckedState()
        fetch("http://localhost:9292/goals", {
            method: "POST",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify(genres)
        })
    }

    return (
        <div className="customize-playlist-form">
            <h2>Welcome User</h2>
            {createForms("Pop")}
            {createForms("R&B")}
            {createForms("Rap/Hip-Hop")}
            {createForms("Country")}
            {createForms("Rock")}
            {createForms("Gospel")}
            {createForms("Mood")}
            {createForms("Dance/Electronic")}
            {createForms("Latin")}
            {createForms("Classical")}
            <button type="submit" onClick={handleSubmit}>
                <Link to="/goals"> Submit </Link>
            </button>
        </div>
    )
}

export default CustomizePlaylist