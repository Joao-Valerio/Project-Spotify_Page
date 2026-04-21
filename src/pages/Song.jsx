import Player from "../Components/Player";
import { Link, useLocation, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
    const { id } = useParams();
    const location = useLocation();
    const shouldAutoPlay = Boolean(location.state?.autoPlay);

    const song = songsArray.find(
        (currentSongObj) => currentSongObj.id === Number(id)
    );

    if (!song) {
        return <div className="song__container">Música não encontrada.</div>;
    }

    const { image, name, duration, artist, audio } = song;

    const artistObj = artistArray.find(
        (currentArtistObj) => currentArtistObj.name === artist
    );

    const songsArrayFromArtist = songsArray.filter(
        (currentSongObj) => currentSongObj.artist === artist
    );

    const currentSongIndex = songsArrayFromArtist.findIndex(
        (currentSongObj) => currentSongObj.id === song.id
    );

    const previousSongId =
        songsArrayFromArtist[
            currentSongIndex > 0 ? currentSongIndex - 1 : songsArrayFromArtist.length - 1
        ]?.id ?? song.id;

    const nextSongId =
        songsArrayFromArtist[
            currentSongIndex < songsArrayFromArtist.length - 1 ? currentSongIndex + 1 : 0
        ]?.id ?? song.id;

    return <div className="song">
        <div className="song__container">
            <div className="song__image-container">
                <img src={image} alt={`Imagem da música ${name}`} />
            </div>
        </div>

        <div className="song__bar">
            {artistObj ? (
                <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
                    <img
                        width={75}
                        height={75}
                        src={artistObj.image}
                        alt={`Imagem do artista ${artist}`}
                    />
                </Link>
            ) : (
                <div className="song__artist-image song__artist-image--placeholder"></div>
            )}
            <Player
                audio={audio}
                duration={duration}
                previousSongId={previousSongId}
                nextSongId={nextSongId}
                shouldAutoPlay={shouldAutoPlay}
            />
            <div className="song__info">
                <p className="song__name">{name}</p>
                <p>{artist}</p>
            </div>
        </div>
    </div>
}

export default Song