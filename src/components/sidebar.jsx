import React, { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";
import styles from "../styles/sidebar.module.css";
import VideoCard from "./video-card";

const Sidebar = () => {
    const { loading, videos } = useContext(VideoContext);

    if (loading) {
        return <p className={styles.loadingMessage}>Just a second...</p>;
    }

    return (
        <div className={styles.content}>
            {videos.map((video, index) => {
                return <VideoCard key={index} video={video} />;
            })}
        </div>
    );
};

export default Sidebar;
