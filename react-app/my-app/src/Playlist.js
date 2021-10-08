import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import PlaylistCard from "./PlaylistCard";

function Playlist({ userInfo }) {
    const location = useLocation()
    const [goalsList, setGoalsList] = useState()
    const [list, setList] = useState([])

    const goal = location.state.genre
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_SECRET = process.env.REACT_APP_API_SECRET

    useEffect(() => {
        fetch(`http://localhost:9292/user_genres/${userInfo.id}`)
        .then(resp => resp.json())
        .then(data => {
            const findGenres = data.filter(element => element.goals.includes(goal))
            const setGenres = findGenres.map(element => element.genres)

            for (const genre of setGenres) {
                fetch(`http://localhost:9292/songs/${genre}`)
                .then(resp => resp.json())
                .then(data => {
                    setList(list => [...list, data])
                })
            }
        })
    }, [])

    return (
        <div className="playlist-div">
            <PlaylistCard userInfo={userInfo} goal={goal} list={list} setList={setList} />
        </div>
    )
}

export default Playlist;