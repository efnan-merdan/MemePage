import React from 'react';

const MemeCard = ({ meme: { MemeID, Title, Description, Image, Year} }) => {
  return (
    <div className="meme" key={MemeID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Image !== "N/A" ? Image : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Description}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MemeCard;