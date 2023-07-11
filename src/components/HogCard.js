import React, { useState } from "react";
import HogCardDetails from "./HogCardDetails";

export default function HogCard({
  name,
  weight,
  greased,
  specialty,
  medal,
  image,
}) {
  const [clicked, setClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false)

  const hogDetails = clicked ? (
    <HogCardDetails
      weight={weight}
      specialty={specialty}
      medal={medal}
      greased={greased}
    />
  ) : null;

  function toggleHogDetails() {
    setClicked((clicked) => !clicked);
  }

  function toggleHideHog() {
    setIsHidden((isHidden) => !isHidden)
  }

  if (isHidden) return null
  return (
    <div className="ui card eight wide column pigTile" >
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="extra content">
          <button className="ui button" onClick={toggleHideHog} >Hide Pig</button>
          <button className="ui button"onClick={toggleHogDetails}>{!clicked ? "Show Details" : "Hide Details"}</button>
        </div>
        {hogDetails}
      </div>
    </div>
  );
}
