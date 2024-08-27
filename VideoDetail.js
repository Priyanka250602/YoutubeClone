import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {fetchFromAPI} from '../utils/fetchFromAPI'
import Loader from './Loader';
import ReactPlayer from 'react-player';
import Videos from './Videos';
import './VideoDetail.css'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className='video-detail'>
      <div className='video-detail-main'>
        <div className='video-player-container'>

          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

          <h3 className='video-title'> {title} </h3>
          <div className='video-info'>
            <Link to={`/channel/${channelId}`} className="channel-link">
              <h2 className='channel-title'>
                {channelTitle}
                <span className='check-icon'>&#10003;</span>
              </h2>
            </Link>
            <div className='video-stats'>
              <p> {parseInt(viewCount).toLocaleString()} views </p>
              <p> {parseInt(likeCount).toLocaleString()} likes </p>

            </div>
          </div>
        </div>
      </div>
      <div className='related-videos'>
        <Videos videos={videos} direction="column" />

      </div>

    </div>
  );
};

export default VideoDetail;