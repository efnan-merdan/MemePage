import React, { useState } from "react";
import "../App.css";
import SearchIcon from "../search.svg";
import MemeList from "../MemeList.json";
import MemeCard from "./MemeCard";
import { Route, Routes } from "react-router-dom";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const foundMemes = MemeList.memes.filter((meme) =>
    meme.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>MemeLand</h1>

      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" />
      </div>

      {foundMemes?.length > 0 ? (
        <div className="container">
          {foundMemes.map((meme) => (
            <MemeCard meme={meme} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No memes found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
