import React, { useState, useEffect } from "react";
import {
  BiDotsVerticalRounded,
  BiPause,
  BiPlay,
  BiRepeat,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  BiVolume,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
} from "react-icons/bi";
import ReactPlayer from "react-player";

const MusicDisplay = () => {
  const playlist = [
    "assets/track1.mp3",
    "assets/track2.mp3",
    "assets/track3.mp3",
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [player, setPlayer] = useState(null);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isShuffle) {
      shufflePlaylist();
    }
  }, [isShuffle]);

  const shufflePlaylist = () => {
    let shuffledPlaylist = [...playlist];
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlaylist[i], shuffledPlaylist[j]] = [
        shuffledPlaylist[j],
        shuffledPlaylist[i],
      ];
    }
    setCurrentTrack(0);
  };

  const playPrevious = () => {
    setCurrentTrack(
      (prevTrack) => (prevTrack - 1 + playlist.length) % playlist.length
    );
    setProgress(0);
  };

  const playNext = () => {
    if (isShuffle) {
      setCurrentTrack((prevTrack) => {
        let newTrack;
        do {
          newTrack = Math.floor(Math.random() * playlist.length);
        } while (newTrack === prevTrack);
        return newTrack;
      });
    } else if (isRepeat) {
      setProgress(0);
      setIsPlaying(false);
      setTimeout(() => {
        setIsPlaying(true);
      }, 10);
    } else {
      setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
      setProgress(0);
    }
  };

  useEffect(() => {
    const storedVolume = localStorage.getItem("volume");
    if (storedVolume !== null) {
      setVolume(parseFloat(storedVolume));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  const handleProgress = (state) => {
    setProgress(state.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (value) => {
    setProgress(value);
    const newPosition = (value / 100) * duration;
    if (player) {
      player.seek(newPosition);
    }
  };

  const handleSliderChange = (value) => {
    setProgress(value);
  };

  const handleSliderMouseUp = (value) => {
    handleSeek(value);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const ref = (player) => {
    setPlayer(player);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setVolume(isMuted ? 1.0 : 0);
  };

  const handleProgressBarClick = (e) => {
    const container = e.currentTarget;
    const containerRect = container.getBoundingClientRect();
    console.log("Container Rect:", containerRect);
    const clickPosition = e.clientX - containerRect.left;
    console.log("Click Position:", clickPosition);
    const progressBarWidth = container.clientWidth;
    console.log("Progress Bar Width:", progressBarWidth);
    const clickPercentage = clickPosition / progressBarWidth;
    console.log("Click Percentage:", clickPercentage);
    const newProgress = clickPercentage * duration;
    console.log("New Progress:", newProgress);
    handleSeek(newProgress);
  };

  return (
    <>
      <div className="musicDisplay">
        <ReactPlayer
          ref={ref}
          url={playlist[currentTrack]}
          playing={isPlaying}
          volume={volume}
          onEnded={playNext}
          onProgress={handleProgress}
          onDuration={handleDuration}
          style={{ display: "none" }}
        />
        <div className="song">
          <div className={isPlaying ? "wav" : "noWav"}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="beatDetails">
            <div className="image">
              <img src="assets/user102.jpg" alt="" />
            </div>
            <div className="detail">
              <span>producer v </span>
              <span>R&B Dancehall Type Beat</span>
            </div>
          </div>
        </div>

        <div className="buttonProgressFlex">
          <div className="buttons font">
            <button onClick={playPrevious}>
              <BiSkipPrevious />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <BiPause /> : <BiPlay />}
            </button>
            <button onClick={playNext}>
              <BiSkipNext />
            </button>
          </div>

          <div className="progressBarContainer">
            <span>{formatTime(progress)}</span>
            <div className="progressBar">
              <input
                type="range"
                min={0}
                max={duration}
                step={0.1}
                value={progress}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="buttonRight">
            <button
              onClick={toggleRepeat}
              style={{ opacity: isRepeat ? "1" : "0.4" }}
              title="repeat"
            >
              <BiRepeat />
            </button>
            <button
              onClick={toggleShuffle}
              style={{ opacity: isShuffle ? "1" : "0.4" }}
              title="shuffle"
            >
              <BiShuffle />
            </button>
          </div>
        </div>

        <div className="volumeContainer">
          <span onClick={toggleMute}>
            {isMuted ? (
              <BiVolumeMute />
            ) : volume > 0.7 ? (
              <BiVolumeFull />
            ) : volume > 0.3 ? (
              <BiVolumeLow />
            ) : (
              <BiVolume />
            )}
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          />
          <span>
            <BiDotsVerticalRounded />
          </span>
        </div>
      </div>
    </>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export default MusicDisplay;
