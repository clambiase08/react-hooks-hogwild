import React from "react";

export default function Filter({ showGreased, onCheckGreased }) {
  function handleGreasedChecked(e) {
    onCheckGreased(e.target.checked);
  }

  return (
    <>
      <div className="ui item">
        <label>Show Only Greased Pigs</label>
      </div>
      <div className="ui item">
        <input
          className="ui toggle checkbox"
          type="checkbox"
          onChange={handleGreasedChecked}
          checked={showGreased}
        />
      </div>
    </>
  );
}
