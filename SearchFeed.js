import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import "./SearchFeed.css";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    console.log('Fetching videos for:', searchTerm);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}maxReslut=50`)
      .then((data) => {
        console.log('Fetched data:', data);
        setVideos(data.items)
      });
  }, [searchTerm]);

  return (
    <div className="search-feed-container">
      <h4 className="search-title">
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </h4>
      <div className="videos-container">
        <div className="videos-list">
          {videos && <Videos videos={videos} />}
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;