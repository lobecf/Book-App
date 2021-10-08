import React, { useEffect, useState } from "react";

function PlaylistCard({ userInfo, goal, list, setList }) {
    const [json, setJson] = useState([])

    useEffect(() => {
        console.log("list:", list)
        setJson(list.map(element => {
            if (element.length !== 0) {
                const songs = element.map(element => element.name)
                return songs.join(",")
            }
        }).filter(element => element !== undefined).join(","))

        // fetch(`http://localhost:9292/playlists`, {
        //     method: "POST",
        //     headers: {"Content-Type" : "application/json" },
        //     body: JSON.stringify({
        //         id: userInfo.id,
        //         user_id: userInfo.id,
        //         goal: goal,
        //         songs: json
        //     })
        //     })
        //     .then(resp => resp.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }, [list])

    const setSongs = () => {
        const map = list.map(arr => {
            return arr.map((song, index) => {
                return <div className="song-info" key={index}>
                    <p className="info-p">{song.name}</p>
                    <p className="info-p">{song.band}</p>
                    <p className="info-p">{song.genre}</p>
                    <button className="song-btn" onClick={() => handleOnChange(song)}>X</button>
                </div>
            })
        })
        return <div className="songs-div">
            <h3>Songs for {goal}</h3>
            <div className="categories">
                <p className="info-p">Song:</p>
                <p className="info-p">Artist:</p>
                <p className="info-p">Genre:</p>
            </div>
            {map}
        </div>
    }

    const handleOnChange = song => {
        console.log("index:", song)
        const songs = list.map(arr => {
            return arr.filter(element => !(element.name === song.name && element.genre === song.genre))
        })
        setList(songs)
        console.log("songs", songs)
        setJson(songs.map(element => {
            if (element.length !== 0) {
                const songs = element.map(element => element.name)
                return songs.join(",")
            }
        }).filter(element => element !== undefined).join(","))
    }

    useEffect(() => {
        console.log(json)
    }, [json])

    return (
        <div className="playlist-div">
            {setSongs()}
        </div>
    )
}

export default PlaylistCard;