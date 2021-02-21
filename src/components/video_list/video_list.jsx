import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick }) => {
    return (
        <ul>
            {videos.map((video) => {
                return (
                    <VideoItem
                        key={video.id}
                        video={video}
                        onVideoClick={onVideoClick}
                    />
                );
            })}
        </ul>
    );
};

export default VideoList;
