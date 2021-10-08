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

            for (const genre of setGenres) {
                fetch(`http://localhost:9292/songs/${genre}`)
                .then(resp => resp.json())
                .then(data => {
                    setList(list => [...list, data])
                })
            }

            console.log("newGenres:", list)
        })
    }, [])

    useEffect(() => {
        console.log("effect:", list)
    }, [list])

    function setSongs() {
        const map = list.map(arr => {
            return arr.map(song => {
                return <div className="song-info">
                    <p className="info-p">{song.name}</p>
                    <p className="info-p">{song.band}</p>
                    <p className="info-p">{song.genre}</p>
                </div>
            })
        })
        return <div className="songs-div">
            <h3>Songs for {goal}</h3>
            {map}
        </div>
    }

    return (
        <div className="playlist-div">
            {setSongs()}
        </div>
    )
}

export default Playlist;