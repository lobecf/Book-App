import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Playlist({ userInfo }) {
    const location = useLocation()
    const [goalsList, setGoalsList] = useState()
    const [list, setList] = useState()

    const goal = location.state.genre
    console.log(goal)
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_SECRET = process.env.REACT_APP_API_SECRET

    useEffect(() => {
        fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log("Initial data", data)
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
            setList(setGenres)
            // console.log("Genres:", allGenres)
            console.log("Includes Find:", setGenres)

            const newGenres = setGenres.map(genre => {
                fetch(`http://localhost:9292/songs/${genre}`)
                .then(resp => resp.json())
                .then(data => {
                    data.map(element => {
                        console.log(element)
                        setList(list => "aaaaa")
                        console.log("each list:", list)
                    })
                    console.log("final list:", list)
                })
            })

            console.log("newGenres:", list)
            // console.log("Includes Filter:", filteredGenres)
            // console.log(filteredGenres)
            // const findGenres = data.filter(element => element.goals.includes(genre))
            // genres.forEach(fetch using element .genre as interpolated piece)
        })

        // fetch(`http://localhost:9292/songs/${list[0]}`)
        // .then(resp => resp.json())
        // .then(data => console.log("data:", data))
    }, [])

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Playlist;