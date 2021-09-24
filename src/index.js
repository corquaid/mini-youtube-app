import React from "react";
import ReactDOM from "react-dom";
import { VideoProvider } from "./contexts/VideoContext";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Context provider wrapping the entire App

ReactDOM.render(
    <React.StrictMode>
        <VideoProvider>
            <App />
        </VideoProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
