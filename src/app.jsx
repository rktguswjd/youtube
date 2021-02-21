import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "./components/search_form/search_form";
import VideoList from "./components/video_list/video_list";
import "./app.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [channelsThumbnails, setChannelsThumbnails] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = useCallback((video) => {
        setSelectedVideo(video);
        youtube
            .getChannelsThumbnails(video.snippet.channelId)
            .then((result) => setChannelsThumbnails(result));
    }, []);

    const onSearch = useCallback((search) => {
        setSelectedVideo(null);
        youtube.searchWord(search).then((result) => {
            setVideos(result);
        });
    }, []);

    useEffect(() => {
        youtube.mostPopular().then((result) => setVideos(result));
    }, []);

    return (
        <>
            <SearchForm onSearch={onSearch} />
            {selectedVideo ? (
                <VideoDetail
                    video={selectedVideo}
                    channelsThumbnails={channelsThumbnails}
                />
            ) : (
                <VideoList videos={videos} onVideoClick={selectVideo} />
            )}
        </>
    );
}

export default App;
