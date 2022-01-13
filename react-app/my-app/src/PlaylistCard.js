import React, { useEffect, useState } from "react";

function PlaylistCard({ userInfo, goal, list, setList }) {
    const [json, setJson] = useState([])

    useEffect(() => {
        console.log("list:", list)
        setJson(list.map(element => {
            if (element.length !== 0) {
                const books = element.map(element => element.name)
                return books.join(",")
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

    const setBooks = () => {
        const map = list.map(arr => {
            return arr.map((book, index) => {
                return <div className="song-info" key={index}>
                    <p className="info-p">{book.title}</p>
                    <p className="info-p">{book.author}</p>
                    <p className="info-p">{book.genre}</p>
                    <button className="song-btn" onClick={() => handleOnChange(book)}>X</button>
                </div>
            })
        })
        return <div className="songs-div">
            <h3>Songs for {goal}</h3>
            <div className="categories">
                <p className="info-p">Title:</p>
                <p className="info-p">Author:</p>
                <p className="info-p">Genre:</p>
                <button className="song-btn-2">Remove</button>
            </div>
            {map}
        </div>
    }

    const handleOnChange = book => {
        console.log("index:", book)
        const books = list.map(arr => {
            return arr.filter(element => !(element.title === book.title && element.genre === book.genre))
        })
        setList(books)
        console.log("books", books)
        setJson(books.map(element => {
            if (element.length !== 0) {
                const books = element.map(element => element.title)
                return books.join(",")
            }
        }).filter(element => element !== undefined).join(","))
    }

    useEffect(() => {
        console.log(json)
    }, [json])

    return (
        <div className="playlist-div">
            {setBooks()}
        </div>
    )
}

export default PlaylistCard;