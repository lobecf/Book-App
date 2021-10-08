import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Questionnaire ({ userInfo }) {
    let history = useHistory();
    const goals = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]
    const genres = ["Pop", "R&B", "Rap", "Country", "Rock", "Gospel", "Mood", "Electronic", "Latin", "Classical", "Done"]
    const [fullResults, setFullResults] = useState({})
    const [currentGenre, setCurrentGenre] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(goals.length).fill(false)
    )

    function createForm (section) {
        if (section === "Done") {
            return <div className="big-message">
                <h2>You've finished the survey!</h2>
                <h3>Click the button to view your custom playlists!</h3>
            </div>
        } else {
            const list = goals.map((genre, index) =>
            <form key={index} className="genre-form-container">
                <input
                type="checkbox" 
                className= "form-button"
                name={genre} 
                value={genre}
                checked = {checkedState[index]}
                onChange={() => handleOnChange(section, genre, index)}/>
                <label for={genre}>{genre}</label>
            </form>
            )
            return <div className="Questionnaire-form-div">
                        <h3 className="genre-name">{section}</h3>
                        {list}
                        </div>
        }
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

            setFullResults({...fullResults, ...result})

            setCheckedState(new Array(goals.length).fill(false))
        } else {

            for (const [genre, goals] of Object.entries(fullResults)) {
                console.log(`${genre}: ${goals}`)
                fetch("http://localhost:9292/user_genres", {
                    method: "POST",
                    headers: {"Content-Type" : "application/json" },
                    body: JSON.stringify({
                        user_id: userInfo.id,
                        genres: genre,
                        goals: goals.join(",")
                    })
                    })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                })
              }

            history.push("/goal")
        }
    }

    return (
        <div>
            <div className="intro-new-user">
                <h2>Hello {userInfo.name}</h2>
                <p>Before we get to the good stuff, we need some information from you</p>
                <p>Select each checkbox that you associate with each genre below</p>
            </div>
            <div className="customize-playlist-form">
            <i class="fas fa-book"></i>
                {createForm(genres[currentGenre])}
                <button type="submit" className="customize-playlist-button" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}

export default Questionnaire