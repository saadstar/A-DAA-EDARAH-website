import React from 'react';


const VideoSection = () => {

    return (
        <div className="video-section" style={{ backgroundImage: `url(/assets/img/68a11f19-9e0f-4ec7-9d84-783d5adf37a7.jpeg)` }}>
            <div className="overlay"></div>
            <div className="video-inner-box">
                <div className="play-btn">
                    <a href="#" className="mfp-iframe"><i className="fa-solid fa-play"></i></a>
                </div>
            </div>
        </div>
    );
}



export default VideoSection;