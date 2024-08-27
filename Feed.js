import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';
import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import './Feed.css';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null); //([])

  useEffect(() => {

    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=50`) 
      .then((data) => {
        console.log("aa", data)
        setVideos(data.items)
      })
  }, [selectedCategory])

  return (
    <div className="feed-container">
      <div className="sidebar-container"> 

      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <p className="copyright"> Copyright @ 2022 YOUTUBE </p>

      </div>

      <div className="videos-container">
        <h2 className="videos-title">
          
          {selectedCategory}
          <span className="videos-title-highlight"> Videos </span>

        </h2>

        <Videos videos={videos} />

      </div>
    </div>
    
 );
};

export default Feed