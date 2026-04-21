import PropTypes from "prop-types";
import { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {

    const [items, setItems] = useState(5);

    return (
        <div className="song-list">
            {songsArray
                .slice(0, items)
                .map((currentSongObj, index) => (
                    <SongItem {...currentSongObj} index={index} key={index} />
                ))}

            {items < songsArray.length ? (
                <p
                    className="song-list__see-more"
                    onClick={() => {
                        setItems(items + 5);
                    }}
                >
                    Ver mais
                </p>
            ) : null}
        </div>
    );
};

SongList.propTypes = {
    songsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SongList;
