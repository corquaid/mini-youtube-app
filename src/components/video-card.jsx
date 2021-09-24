import React, { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";
import styles from "../styles/video-card.module.css";

const VideoCard = ({ video }) => {
    const { setSelectedVideo } = useContext(VideoContext);

    const { url } = video.snippet.thumbnails.medium;
    const { title, channelTitle } = video.snippet;
    
    const handleVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    return (
        <div className={styles.content} onClick={() => handleVideoSelect(video)}>
            <img className={styles.image} src={url} alt="thumbnail" />
            <div className={styles.titleContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.channel}>{channelTitle}</p>
            </div>
        </div>
    );
};

export default VideoCard;
