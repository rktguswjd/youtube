import React from "react";
import VideoItem from "./video_item";

const VideoList = (props) => {
    console.log(props);
    return (
        <ul>
            {props.videos.map((video) => {
                return <VideoItem key={video.etag} video={video} />;
            })}
        </ul>
    );
};

export default VideoList;
