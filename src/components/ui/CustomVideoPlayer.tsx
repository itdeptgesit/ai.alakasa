"use client";

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
  poster: string;
}

export const CustomVideoPlayer = ({ src, poster }: CustomVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden group shadow-lg bg-black cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        controls={isPlaying} // Show controls only when playing
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1 fill-white" />
          </div>
        </div>
      )}
    </div>
  );
};
