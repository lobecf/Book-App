import React from "react";
import { useHistory } from "react-router-dom";

function GoalCard() {
    const goals = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/playlist")
    }    
    function createGoalCard () {
        const list = goals.map((genre, index) =>
        <div key={index} className="goal-card-container" onClick={handleSubmit}>
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