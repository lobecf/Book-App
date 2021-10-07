import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function GoalCard() {
    const goals = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]
    const [selectedGenre, setSelectedGenre] = useState("")
    let history = useHistory();

    const handleSubmit = (e, genre) => {
        e.preventDefault();
        // history.push("/playlist", genre)
        setSelectedGenre(genre)
        history.push({
            pathname: '/playlist',
            state: {
              genre: genre, 
            },
          }); 
    }    
    function createGoalCard () {
        const list = goals.map((genre, index) =>
        <div key={index} className="goal-card-container" onClick={e => handleSubmit(e, genre)}>
            <h3>{genre}</h3>
        </div>
        )
        return (
        <div className="all-cards">
            {list}
        </div>
        )
    }

    return (
        <div className="goal-card">
            {createGoalCard()}
        </div>
    )
}

export default GoalCard;