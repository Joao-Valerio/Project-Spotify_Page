import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../Components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
    const { id } = useParams();

    const artist = artistArray.find(
        (currentArtistObj) => currentArtistObj.id === Number(id)
    );

    if (!artist) {
        return <div className="artist__body">Artista não encontrado.</div>;
    }

    const { name, banner } = artist;

    const songsArrayFromArtist = songsArray.filter(
        (currentSongObj) => currentSongObj.artist === name
    );

    const firstSongId = songsArrayFromArtist[0]?.id;

    return (
        <div className="artist">
            <div
                className="artist__header"
                style={{
                    backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
                }}
            >
                <h2 className="artist__title">{name}</h2>
            </div>

            <div className="artist__body">
                <h2>Populares</h2>

                <SongList songsArray={songsArrayFromArtist} />
            </div>

            {firstSongId ? (
                <Link to={`/song/${firstSongId}`} state={{ autoPlay: true }}>
                    <FontAwesomeIcon
                        className="single-item__icon single-item__icon--artist"
                        icon={faCirclePlay}
                    />
                </Link>
            ) : null}
        </div>
    );
};

export default Artist;
