import React from "react";

const VideoItem = (props) => {
    return (
        <div className="card">
            <img src={props.video.snippet.thumbnails.medium.url} />
            <div>
                <p className="card-title">
                    {props.video.snippet.title}
                    <br />
                    <br />
                    {props.video.snippet.channelTitle}
                </p>
            </div>
        </div>
    );
};

export default VideoItem;
