import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "./components/search_form";
import VideoList from "./components/video_list";
import "./app.css";
import VideoDetail from "./components/video_detail";

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState("");

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
            .then((result) => {
                setVideos(
                    result.items
                        .map((video) => {
                            if (typeof video.id != String)
                                video.id = video.id.videoId;
                            return video;
                        })
                        .filter((video) => video.id !== undefined)
                );
            })
            .catch((error) => console.log("error", error));
    }, []);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };
    console.log(videos);
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

    //

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            {selectedVideo && <VideoDetail video={selectedVideo} />}
            <VideoList videos={videos} onVideoClick={selectVideo} />
        </>
    );
}

export default App;
