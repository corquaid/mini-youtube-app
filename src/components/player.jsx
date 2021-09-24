import React, { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";
import styles from "../styles/player.module.css";

const Player = () => {
    const { selectedVideo } = useContext(VideoContext);

    if (!selectedVideo) {
        return (
            <h1 className={styles.loadingMessage}>
                Welcome to our little clone app using the YouTube API.
                <br />
                <br /> Search and play!
            </h1>
        );
    }

    const videoUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`;

    return (
        <div className={styles.content}>
            <div className={styles.iframeBox}>
                <iframe
                    className={styles.iframe}
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <h1>{selectedVideo.snippet.title}</h1>
                <h2>{selectedVideo.snippet.description}</h2>
            </div>
        </div>
    );
};

export default Player;
