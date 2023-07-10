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
    <HogCardDetails weight={weight} specialty={specialty} medal={medal} greased={greased}/>
  ) : null;

  function toggleHogDetails() {
    setClicked((clicked) => !clicked);
  }

  return (
    <div onClick={toggleHogDetails}>
      <h1>{name}</h1>
      <img src={image} />
      {hogDetails}
    </div>
  );
}
