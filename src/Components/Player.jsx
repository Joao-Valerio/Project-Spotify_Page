import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePause,
    faCirclePlay,
    faBackwardStep,
    faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const formatTime = (timeInSeconds) => {
    if (!Number.isFinite(timeInSeconds)) {
        return "00:00";
    }

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const Player = ({ audio, duration, previousSongId, nextSongId, shouldAutoPlay }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [trackDuration, setTrackDuration] = useState(0);

    const playAudio = async () => {
        if (!audioRef.current) {
            return;
        }

        try {
            await audioRef.current.play();
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
        }
    };

    const togglePlayback = async () => {
        if (!audioRef.current) {
            return;
        }

        if (audioRef.current.paused) {
            await playAudio();
            return;
        }

        audioRef.current.pause();
        setIsPlaying(false);
    };

    useEffect(() => {
        const currentAudio = audioRef.current;

        if (!currentAudio) {
            return;
        }

        currentAudio.pause();
        currentAudio.currentTime = 0;
        setCurrentTime(0);
        setTrackDuration(0);
        setIsPlaying(false);

        if (shouldAutoPlay) {
            playAudio();
        }
    }, [audio, shouldAutoPlay]);

    return <div className="player">
        <audio
            ref={audioRef}
            src={audio}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={(event) => setTrackDuration(event.currentTarget.duration)}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        />

        <div className="player__controllers">
            <Link to={`/song/${previousSongId}`} state={{ autoPlay: true }}>
                <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
            </Link>
            <button className="player__button" type="button" onClick={togglePlayback}>
                <FontAwesomeIcon
                    className="player__icon player__icon--play"
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                />
            </button>
            <Link to={`/song/${nextSongId}`} state={{ autoPlay: true }}>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
            </Link>
        </div>
        <div className="player__progress">
            <p className="player__time">{formatTime(currentTime)}</p>

            <div className="player__bar">
                <div
                    className="player__bar-progress"
                    style={{
                        "--_progress": `${trackDuration ? (currentTime / trackDuration) * 100 : 0}%`,
                    }}
                ></div>
            </div>

            <p className="player__time">{trackDuration ? formatTime(trackDuration) : duration}</p>
        </div>
    </div>
}

Player.propTypes = {
    audio: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    previousSongId: PropTypes.number.isRequired,
    nextSongId: PropTypes.number.isRequired,
    shouldAutoPlay: PropTypes.bool,
};

export default Player;