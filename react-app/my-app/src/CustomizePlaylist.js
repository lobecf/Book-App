import React, { useState } from "react";

function CustomizePlaylist () {

    const genres = ["party", "self-discovery", "exercise"]

    return (
        <div className="customize-playlist-form">
            <h2>Welcome User</h2>
            <h3>Pop</h3>
            {/* <form> */}
                {genres.map((genre, index) => {
                <form>
                    <p>Hi</p>
                    <input key={index} type="checkbox" id={genre} name={genre} value={genre} />
                    <label for={genre}>{genre}</label>
                </form>
                })}
                {/* <input type="checkbox" id="focus" name="focus" value="focus"/>
                <label for="focus">Focus</label>
                <input type="checkbox" id="party" name="party" value="party"/>
                <label for="party">Party</label>
                <input type="checkbox" id="self-discovery" name="self-discovery" value="self-disovery"/>
                <label for="self-discovery">Self Discovery</label>
                <input type="checkbox" id="exercise" name="exercise" value="exercise"/>
                <label for="exercise">Exercise</label>
                <input type="checkbox" id="stress-reducing" name="stress-reducing" value="stress-reducing"/>
                <label for="stress-reducing">Stress Reducing</label>
                <input type="checkbox" id="ease-pain" name="ease-pain" value="ease-pain"/>
                <label for="ease-pain">Ease Pain</label>
                <input type="checkbox" id="wellness" name="wellness" value="wellness"/>
                <label for="wellness">Wellness</label> */}
            {/* </form> */}
            <h3>Rap/Hip Hop</h3>
            <form>
                <input type="checkbox" id="focus" name="focus" value="focus"/>
                <label for="focus">Focus</label>
                <input type="checkbox" id="party" name="party" value="party"/>
                <label for="party">Party</label>
                <input type="checkbox" id="self-discovery" name="self-discovery" value="self-disovery"/>
                <label for="self-discovery">Self Discovery</label>
                <input type="checkbox" id="exercise" name="exercise" value="exercise"/>
                <label for="exercise">Exercise</label>
                <input type="checkbox" id="stress-reducing" name="stress-reducing" value="stress-reducing"/>
                <label for="stress-reducing">Stress Reducing</label>
                <input type="checkbox" id="ease-pain" name="ease-pain" value="ease-pain"/>
                <label for="ease-pain">Ease Pain</label>
                <input type="checkbox" id="wellness" name="wellness" value="wellness"/>
                <label for="wellness">Wellness</label>
            </form>
            <h3>Rock</h3>
            <form>
                <input type="checkbox" id="focus" name="focus" value="focus"/>
                <label for="focus">Focus</label>
                <input type="checkbox" id="party" name="party" value="party"/>
                <label for="party">Party</label>
                <input type="checkbox" id="self-discovery" name="self-discovery" value="self-disovery"/>
                <label for="self-discovery">Self Discovery</label>
                <input type="checkbox" id="exercise" name="exercise" value="exercise"/>
                <label for="exercise">Exercise</label>
                <input type="checkbox" id="stress-reducing" name="stress-reducing" value="stress-reducing"/>
                <label for="stress-reducing">Stress Reducing</label>
                <input type="checkbox" id="ease-pain" name="ease-pain" value="ease-pain"/>
                <label for="ease-pain">Ease Pain</label>
                <input type="checkbox" id="wellness" name="wellness" value="wellness"/>
                <label for="wellness">Wellness</label>
            </form>
        </div>
    )
}

export default CustomizePlaylist