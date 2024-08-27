import React from 'react';
import Loader from './Loader';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import './Videos.css';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className={`videos-container ${direction === "column"? "column":"row"}`}>
      {videos.map((item, idx) => (
        <div className="video-box" key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;