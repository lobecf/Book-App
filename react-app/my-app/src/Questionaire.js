import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Questionaire ({ userInfo }) {


    const genres = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]
    const [selections, setSelections] = useState({})

    function createForms (section) {
        const list = genres.map((genre, index) =>
        <form className= {`${genre}-form`}>
            <input key={index} 
            type="checkbox" 
            className= "form-button"
            name={genre} 
            value={genre} 
            onChange={() => handleOnChange(section, genre, index)}/>
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

    const handleOnChange = (section, genre, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const getChoices = updatedCheckedState
        setSelections(getChoices)
        console.log("Selections:", selections)
    }

    const handleSubmit = (e) => {
        console.log(selections)
        setCheckedState()
        fetch("http://localhost:9292/user_goals", {
            method: "POST",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify(selections)
        })
    }

    return (
        <div className="customize-playlist-form">
            <h2>Welcome {userInfo.name}</h2>
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

export default Questionaire