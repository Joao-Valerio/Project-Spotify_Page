import React from "react";
import ItemList from "./ItemList";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Main = ({ type }) => {
    return (
        <div className="main">
            {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={8}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
           {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={24}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
        </div>
    )
}

export default Main