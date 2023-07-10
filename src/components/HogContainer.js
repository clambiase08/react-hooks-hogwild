import React, { useState } from "react";
import HogCard from "./HogCard";
import Filter from "./Filter";

export default function HogContainer({ hogs }) {
    
  const [showGreased, setShowGreased] = useState(false);

//   const newHogData = hogs.filter((hog) => {
//     if (!showGreased) {
//       return true;
//     } else {
//       return hog.greased;
//     }
//   });

const greasedHogs = hogs.filter((hog) => hog.greased)

const newHogData = showGreased ? greasedHogs : hogs

  const hogData = newHogData.map((hog) => {
    return (
      <HogCard
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        image={hog.image}
        greased={hog.greased}
        medal={hog["highest medal achieved"]}
        weight={hog.weight}
      />
    );
  });

  return (
    <div>
      <Filter
        showGreased={showGreased}
        setShowGreased={setShowGreased}
      />
      {hogData}
    </div>
  );
}
