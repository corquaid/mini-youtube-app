import { createContext, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const contextProps = {
        loading,
        setLoading,
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo
    }

    return <VideoContext.Provider value={contextProps}>{children}</VideoContext.Provider>
}

export { VideoProvider, VideoContext };