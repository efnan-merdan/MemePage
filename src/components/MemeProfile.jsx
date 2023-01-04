import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MemeList from "../MemeList";

const MemeProfile = () => {
  const { id } = useParams();

  const memeProfile = MemeList.memes.find((meme) => meme.MemeID === id);
  console.log(memeProfile);

  return (
    <div>
      <div className="app">
        <h2>{memeProfile.Title}</h2>
        <div className="box_1">
          <img className="image_1" src={memeProfile.Image}/>
          <img className="arrow" src="https://www.seekpng.com/png/detail/26-263022_fileblack-right-arrow-right-arrows.png"/>
          <img className="image_1" src={memeProfile.ImageNow}/>
        </div>
        <div className="box_2">
            <h2>{memeProfile.Year}</h2>
            <h4>{memeProfile.About}</h4>
          </div>
        <div className="box_1">
        </div>
      </div>
    </div>
  );
};

export default MemeProfile;
