import React, { useState } from "react";
import HogCard from "./HogCard";
import Filter from "./Filter";
import Sort from "./Sort";

export default function HogContainer({ hogs }) {
  const [showGreased, setShowGreased] = useState(false);
  const [sortHogs, setSortHogs] = useState("none");

  const sortOptions = {
    none: { method: () => null },
    name: { method: (a, b) => (a.name > b.name ? 1 : -1) },
    weight: { method: (a, b) => b.weight - a.weight },
  };

  //   const newHogData = hogs.filter((hog) => {
  //     if (!showGreased) {
  //       return true;
  //     } else {
  //       return hog.greased;
  //     }
  //   });

  const greasedHogs = hogs.filter((hog) => hog.greased);

  const newHogData = showGreased ? greasedHogs : hogs;
  const sortedHogs = [...newHogData].sort(sortOptions[sortHogs].method);

  const hogData = sortedHogs.map((hog) => {
    return (
      <div className="ui three stackable cards">
        <HogCard
          key={hog.name + hog.weight}
          name={hog.name}
          specialty={hog.specialty}
          image={hog.image}
          greased={hog.greased}
          medal={hog["highest medal achieved"]}
          weight={hog.weight}
        />
     </div>     
    );
  });

  return (
    <>
    <div className="ui menu">
      <Filter showGreased={showGreased} onCheckGreased={setShowGreased} />
      <Sort setSortHogs={setSortHogs} setShowGreased={setShowGreased} />
    </div>
      {hogData}
    </>
  );
}
