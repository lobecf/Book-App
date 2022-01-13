import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Questionnaire ({ userInfo }) {
    let history = useHistory();
    const goals = ["Building Vocabulary", "Inducing Sleep", "Reducing Stress", "Increasing Motivation", "Sparking Creativity", "Increasing Concentration", "Inducing Emphathy", "Stimulating Composition"]
    const genres = ["Fantasy", "Philosophy", "Poetry", "Horror", "Suspense", "Satire", "Non fiction", "Mystery", "Romance", "Historical", "Done"]
    const [fullResults, setFullResults] = useState({})
    const [currentGenre, setCurrentGenre] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(goals.length).fill(false)
    )

    function createForm (section) {
        if (section === "Done") {
            return <div className="big-message">
                <h6>Click the button to view</h6>
                <h6>your custom playlists!</h6>
            </div>
        } else {
            const list = goals.map((genre, index) =>
            <form key={index} className="genre-form-container" onClick={() => handleOnChange(section, genre, index)}>
                <input
                type="checkbox" 
                className= "form-button"
                name={genre} 
                value={genre}
                checked = {checkedState[index]}
                // onChange={() => handleOnChange(section, genre, index)}
                />
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

    // history.push(`/stories/${data.id}`)
    // route path="stories/:id"
    // let id = useParams 
    
console.log(fullResults)

    return (
        <div>
            <div className="intro-new-user">
                <h2>Hello {userInfo.name}</h2>
                <p>Check each goal that you associate a book genre</p>
                <p>with to retrieve your own customized book readlist</p>
            </div>
            <div className="customize-playlist-form">
                {createForm(genres[currentGenre])}
                <button type="submit" className="customize-playlist-button" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}

export default Questionnaire