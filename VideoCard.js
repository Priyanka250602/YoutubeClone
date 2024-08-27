import React from 'react';
import { Link } from 'react-router-dom';
import { demoVideoUrl, demoChannelUrl, demoThumbnailUrl, demoChannelTitle, demoVideoTitle } from '../utils/constant';
import './VideoCard.css';

const VideoCard = ({ video: {id: {videoId} , snippet} }) => {
  const thumbnailUrl = snippet?.thumbnails?.high?.url;
  const videoTitle = snippet?.title ;
  const channelTitle = snippet?.channelTitle || 'Default Channel Title';

  return (
    <div className="video-card">

      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hkfY`} >

        <img src={thumbnailUrl || demoThumbnailUrl} alt={videoTitle} className="video-card-image" />

      </Link>


      <div className="video-card-content">

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >

          <h3 className="video-card-title">{videoTitle.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h3>

        </Link>

        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <p className="video-card-channel">
            {channelTitle || demoChannelTitle} <span className="check-icon">&#10003;</span>
          </p>

        </Link>

      </div>

    </div>
  );
};

export default VideoCard;