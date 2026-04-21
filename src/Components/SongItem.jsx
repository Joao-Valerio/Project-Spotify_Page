import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SongItem = ({ image, name, duration, id, index }) => {
    return (
        <Link to={`/song/${id}`} state={{ autoPlay: true }} className="song-item">
            <div className="song-item__number-album">
                <p>{index + 1}</p>

                <div className="song-item__album">
                    <img
                        src={image}
                        alt={`Imagem da Música ${name}`}
                        className="song-item__image"
                    />

                    <p className="song-item__name">{name}</p>
                </div>
            </div>

            <p>{duration}</p>
        </Link>
    );
};

SongItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default SongItem;
