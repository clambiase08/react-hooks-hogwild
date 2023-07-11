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

  return (
    <div class="ui fluid card" onClick={toggleHogDetails}>
      <div class="image">
        <img src={image} />
      </div>
      <div class="content">
        <div class="header">{name}</div>
        <div class="description">{hogDetails}</div>
      </div>
    </div>
  );
}
