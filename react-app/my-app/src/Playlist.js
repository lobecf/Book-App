import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Playlist({ userInfo }) {
    const location = useLocation()
    const [goalsList, setGoalsList] = useState()
    const [list, setList] = useState([])

    const goal = location.state.genre
    console.log(goal)
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_SECRET = process.env.REACT_APP_API_SECRET

    useEffect(() => {
        fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log("Initial data", data)
            setGoalsList(data)
            // const filteredGenres = data.map(element => {
            //     const arr = element.goals.split(",")
            //     return arr.filter(element => {
            //         console.log(element)
            //         return element === goal ? element : null
            //     })
            // })
            // const allGenres = data.map(element => element.goals)
            const findGenres = data.filter(element => element.goals.includes(goal))
            const setGenres = findGenres.map(element => element.genres)
            // console.log("Genres:", allGenres)
            console.log("Includes Find:", setGenres)
            console.log(`https://api.discogs.com/database/search?q=${goal}&genre&key=${API_KEY}&secret=${API_SECRET}`)
            // console.log("Includes Filter:", filteredGenres)
            // console.log(filteredGenres)
            // const findGenres = data.filter(element => element.goals.includes(genre))
            // genres.forEach(fetch using element .genre as interpolated piece)
        })

        fetch(`https://api.discogs.com/database/search?q=${goal}&genre&key=${API_KEY}&secret=${API_SECRET}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Playlist;