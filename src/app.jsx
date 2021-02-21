import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "./components/search_form/search_form";
import VideoList from "./components/video_list/video_list";
import "./app.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    const handleSearch = useCallback((search) => {
        setSelectedVideo(null);
        youtube.searchWord(search).then((result) => setVideos(result));
    }, []);

    useEffect(() => {
        youtube.mostPopular().then((result) => setVideos(result));
    }, []);

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
