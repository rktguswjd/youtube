import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "./components/search_form/search_form";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
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
        <div className={styles.app}>
            <SearchForm onSearch={onSearch} />
            <section className={styles.section}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail
                            video={selectedVideo}
                            channelsThumbnails={channelsThumbnails}
                        />
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? "list" : "grid"}
                    />
                </div>
            </section>
        </div>
    );
}

export default App;
