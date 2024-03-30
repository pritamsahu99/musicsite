import React, { useState } from 'react';

function PlayPauseButtons() {
    const [isPlaying, setIsPlaying] = useState(false);
    // Function to toggle play/pause state
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <div>
            {isPlaying ? (
                <i onClick={togglePlayPause} className="ri-pause-circle-line"></i>
                ) : (
                <i onClick={togglePlayPause} className="ri-play-circle-line"></i>
            )}
        </div>
    );
}

export default PlayPauseButtons;
