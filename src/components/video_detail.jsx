import React from "react";
import ReactPlayer from "react-player";

const VideoDetail = ({ video }) => {
    return (
        <>
            <ReactPlayer
                url={`https://www.youtube.com/embed/${video.id}`}
                playing
                controls
            />

            <div className="video-detail">
                <p className="video-detail-title">{video.snippet.title}</p>
                <p className="video-detail-channeltitle">
                    {video.snippet.channelTitle}
                </p>
                <p className="video-detail-description">
                    {video.snippet.description}
                </p>
            </div>
        </>
    );
};

export default VideoDetail;
