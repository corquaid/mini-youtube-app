import { useContext } from "react";
import { VideoContext } from "./contexts/VideoContext";
import apiCall from "./api/apiCall";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import styles from "./styles/App.module.css";

const App = () => {

    const { setLoading, setVideos } = useContext(VideoContext)

    const handleSubmit = async searchTerm => {
        try {
            setLoading(true);
            console.log(searchTerm)
            const response = await apiCall.get("/search", {
                params: {
                    q: searchTerm,
                },
            });
            setLoading(false);
            setVideos(response.data.items);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.app}>
            <TopBar handleSearch={handleSubmit} />
            <div className={styles.mainContent}>
                <Player />
                <Sidebar />
            </div>
        </div>
    );
};

export default App;
