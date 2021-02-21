import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, onVideoClick }) => {
    const onClick = () => {
        onVideoClick(video);
    };
    return (
        <li className={styles.container} onClick={onClick}>
            <div className={styles.video}>
                <img
                    className={styles.thumbnail}
                    src={video.snippet.thumbnails.medium.url}
                />
                <div className={styles.matadata}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.channel}>
                        {video.snippet.channelTitle}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
