import React from "react";
import { Link } from "react-router-dom";

const MemeCard = ({ meme: { MemeID, Title, Image, Year} }) => {
  return (
    <div className="meme" key={MemeID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Image !== "N/A" ? Image : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div className="lowerSection">
        <h3>{Title}</h3>
        <Link to={"/meme/"+MemeID}>More</Link>
      </div>
    </div>
  );
};

export default MemeCard;
