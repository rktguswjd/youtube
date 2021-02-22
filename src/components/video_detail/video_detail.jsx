import React from "react";
import ReactPlayer from "react-player";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, channelsThumbnails }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <ReactPlayer
                        className={styles.player}
                        url={`https://www.youtube.com/embed/${video.id}`}
                        playing
                        controls
                    />
                </div>
                <div className={styles.matadate}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <hr />
                    <img
                        className={styles.thumbnail}
                        src={channelsThumbnails}
                    />
                    <p className={styles.channelTitle}>
                        {video.snippet.channelTitle}
                    </p>
                    <br />
                    <p className={styles.description}>
                        {video.snippet.description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default VideoDetail;
