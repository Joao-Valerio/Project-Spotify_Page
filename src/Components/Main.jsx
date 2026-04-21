import ItemList from "./ItemList";
import PropTypes from "prop-types";
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
            ) : null}
            {type === "songs" || type === undefined ? (
                <ItemList
                    title="Músicas"
                    items={24}
                    itemsArray={songsArray}
                    path="/songs"
                    idPath="/song"
                />
            ) : null}
        </div>
    )
}

Main.propTypes = {
    type: PropTypes.string,
};

export default Main