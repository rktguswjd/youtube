import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
    // console.log(video);
    const onClick = () => {
        onVideoClick(video);
    };
    return (
        <div className="card" onClick={onClick}>
            <img src={video.snippet.thumbnails.medium.url} />
            <div>
                <p className="card-title">
                    {video.snippet.title}
                    <br />
                    <br />
                    {video.snippet.channelTitle}
                </p>
            </div>
        </div>
    );
};

export default VideoItem;
