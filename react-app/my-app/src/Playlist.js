import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Playlist({ userInfo }) {
    const location = useLocation()
    const [goalsList, setGoalsList] = useState()

    const genre = location.state.genre.toLowerCase()
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_SECRET = process.env.REACT_APP_API_SECRET

    useEffect(() => {
        fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log("Initial data", data)
            setGoalsList(data)
        })

        fetch(`https://api.discogs.com/database/search?q=${genre}&genre&key=${API_KEY}&secret=${API_SECRET}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }, [])

    console.log(location.state.genre)
    return (
        <div>
            <p></p>
        </div>
    )
}

export default Playlist;