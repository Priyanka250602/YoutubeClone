import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';
import './ChannelCard.css';

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId;
  const channelTitle = channelDetail?.snippet?.title;
  const profilePicture = channelDetail?.snippet?.thumbnails?.high?.url;
  const subscriberCount = channelDetail?.statistics?.subscriberCount;
  return (
    <div className="channel-card" style={{ marginTop }}>
      <Link to={`/channel/${channelId}`}>
        <div className="channel-card-content">
          <img
            src={profilePicture || demoProfilePicture}
            alt={channelTitle}
            className="channel-card-image"
          />
          <h3 className="channel-card-title">
            {channelTitle}{' '}
            <span className="check-icon">&#10003;</span>
          </h3>
          {subscriberCount && (
            <p className="channel-card-subscribers">
              {parseInt(subscriberCount).toLocaleString('en-US')} Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  )
};

export default ChannelCard;