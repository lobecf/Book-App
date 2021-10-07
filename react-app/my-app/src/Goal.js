import React, { useState, useEffect } from "react";
import { generatePath } from "react-router";

function Goal ({ userInfo }) {
    const [goalsList, setGoalsList] = useState([])
    console.log("User Info:", userInfo)
    // useEffect(() => {
    //     fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
    //     .then(resp => resp.json())
    //     .then(data => {

    //         console.log(data)
    //         setGoalsList(data)
    //     })
    // }, [])

    // useEffect(() => {
    //     const charts = goalsList.map(genre =>
    //         <h3>{genre}</h3>
    //     )
    // }, [goalsList])


    function createCharts () {
        fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
        .then(resp => resp.json())
        .then(data => {
            debugger;
            console.log("Initial data", data)
            setGoalsList(data)
        })
        console.log("GoalList:", goalsList)
        const charts = goalsList && goalsList.map(genre => {
            console.log("genre:", genre)
            const genres = genre["goals"].split(",").map((goal, index) => {
                return <p key={index} className="goal-item">{goal}</p>
            })

            return  <div>
                        <h3>{genre.genres}</h3>
                        <ul>
                            {genres}
                        </ul>
                    </div>
        })
        return charts
    }

    return (
        <div>
            <h2>Welcome {userInfo.name}</h2>
            <h2>Your Goals:</h2>
            {createCharts()}
        </div>
    )
}

export default Goal