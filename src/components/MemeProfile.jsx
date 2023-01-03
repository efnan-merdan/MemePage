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
        <h1>{memeProfile.Title}</h1>
        <div className="box_1">
          <img src={memeProfile.Image}/>
          <div className="box_2">
            <h2>{memeProfile.Year}</h2>
            <h3>{memeProfile.About}</h3>
          </div>
          
        </div>
        <div className="box_1">
        <img src={memeProfile.ImageNow}/>
        </div>
      </div>
    </div>
  );
};

export default MemeProfile;
