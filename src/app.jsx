import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "./components/search_form";
import VideoList from "./components/video_list";
import "./app.css";

function App() {
    const [videos, setVideos] = useState([]);

    const handleSearch = useCallback((search) => {
        let requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyCsVvXYflpkfnfvlGHTRVCndJ8zuTSVB6U`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    useEffect(() => {
        let requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCsVvXYflpkfnfvlGHTRVCndJ8zuTSVB6U",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            <VideoList videos={videos} />
        </>
    );
}

export default App;
