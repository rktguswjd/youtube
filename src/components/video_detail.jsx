import React from "react";
import ReactPlayer from "react-player";

const VideoDetail = ({ video }) => {
    console.log(video);
    return (
        <>
            <ReactPlayer
                url={`https://www.youtube.com/embed/${video.id}`}
                playing
                controls
            />
        </>
    );
};

export default VideoDetail;
