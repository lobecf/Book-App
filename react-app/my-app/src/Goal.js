import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard";
import { generatePath } from "react-router";

function Goal ({ userInfo }) {
    const [goalsList, setGoalsList] = useState([])
    console.log("User Info:", userInfo)

    // function createCharts () {
    //     fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log("Initial data", data)
    //         setGoalsList(data)
    //     })
    //     console.log("GoalList:", goalsList)
    //     const charts = goalsList && goalsList.map(genre => {
    //         console.log("genre:", genre)
    //         const genres = genre["goals"].split(",").map((goal, index) => {
    //             return <p key={index} className="goal-item">{goal}</p>
    //         })

    //         return  <div>
    //                     <h3>{genre.genres}</h3>
    //                     <ul>
    //                         {genres}
    //                     </ul>
    //                 </div>
    //     })
    //     return charts
    // }

    return (
        <div>
            <h2>{userInfo.name}'s Goals</h2>
            <GoalCard />
        </div>
    )
}

export default Goal