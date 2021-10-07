import React from "react";

function GoalCard() {
    const goals = ["Focus", "Party", "Self Discovery", "Exercise", "Improve Memory", "Reduce Stress", "Ease Pain", "Wellness"]
    
    function createGoalCard () {
        const list = goals.map((genre, index) =>
        <div key={index}>
            <h3>{genre}</h3>
        </div>
        )
        return (
        <div className="goal-card-container">
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