import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import "./ChannelDetail.css";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {

      const data = await fetchFromAPI(`channels?part=snippet&id=${id}&maxResults=50`);
      console.log("aaaa", data)
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`);
      console.log("ww", videosData)
      setVideos(videosData?.items);

    };

    fetchResults();
  }, [id]);

  return (
    <div className="channel-detail" style={{ minHeight: '95vh' }}>

      <div className="channel-header">
        <div className="channel-header-bg" />

        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </div>

      <div className="channel-videos">

        <div className="channel-videos-spacer" />
        <Videos videos={videos} />
        
      </div>
    </div>

  );
};

export default ChannelDetail;