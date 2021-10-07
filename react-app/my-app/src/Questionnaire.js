import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Questionnaire ({ userInfo }) {
    let history = useHistory();
    const goals = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]
    const genres = ["Pop", "R&B", "Rap/Hip-Hop", "Country", "Rock", "Gospel", "Mood", "Dance/Electronic", "Latin", "Classical"]
    let fullResults = {}
    const [currentGenre, setCurrentGenre] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(goals.length).fill(false)
    )

    function createForm (section) {
        const list = goals.map((genre, index) =>
        <form className= {`${genre}-form`}>
            <input
            key={index} 
            type="checkbox" 
            className= "form-button"
            name={genre} 
            value={genre}
            checked = {checkedState[index]}
            onChange={() => handleOnChange(section, genre, index)}/>
            <label for={genre}>{genre}</label>
        </form>
        )
        return <div>
            <h3>{section}</h3>
            {list}
            </div>
    }

    const handleOnChange = (section, genre, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    }

    const handleSubmit = (e) => {
        if (currentGenre <= (genres.length - 2)) {
            setCurrentGenre(currentGenre => currentGenre + 1)

            const getChoices = checkedState.map((value, index) => {
                if(value === true) {
                    return goals[index]
                }
            })
            console.log(getChoices)
            const fixedChoices = getChoices.filter(value => value != undefined)
            const result = {[genres[currentGenre]]: fixedChoices}
            console.log("Current Results:", result)

            // Object.assign(fullResults, {[genres[currentGenre]]: fixedChoices})
            fullResults = {...fullResults, ...result}
            console.log("Full Results", fullResults)
            setCheckedState(new Array(goals.length).fill(false))
        } else {
            fetch("http://localhost:9292/user_genres", {
                method: "POST",
                headers: {"Content-Type" : "application/json" },
                body: JSON.stringify(fullResults)
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })

            history.push("/goals")
        }
    }

    return (
        <div className="customize-playlist-form">
            <h2>Welcome {userInfo.name}</h2>
            {createForm(genres[currentGenre])}
            <button type="submit" onClick={handleSubmit}>Next</button>
        </div>
    )
}

export default Questionnaire