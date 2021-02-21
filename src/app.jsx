import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "./components/search_form";
import VideoList from "./components/video_list";
import { mostPopular, searchWord } from "./service/youtube-fetch";
import "./app.css";
import VideoDetail from "./components/video_detail";

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState("");

    const handleSearch = useCallback((search) => {
        if (search === "") {
            setSelectedVideo("");
            mostPopular()
                .then((response) => response.json())
                .then((result) => setVideos(result.items))
                .catch((error) => console.log("error", error));
        } else {
            searchWord(search)
                .then((response) => response.json())
                .then((result) =>
                    result.items.map((item) => ({
                        ...item,
                        id: item.id.videoId,
                    }))
                )
                .then((items) => setVideos(items))
                .catch((error) => console.log("error", error));
        }
    }, []);

    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    useEffect(() => {
        mostPopular()
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    console.log(videos);
    return (
        <>
            <SearchForm onSearch={handleSearch} />
            {selectedVideo ? (
                <VideoDetail video={selectedVideo} />
            ) : (
                <VideoList videos={videos} onVideoClick={selectVideo} />
            )}
        </>
    );
}

export default App;
