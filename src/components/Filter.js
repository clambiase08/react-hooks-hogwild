import React from 'react'

export default function Filter({showGreased, setShowGreased}) {

    function handleGreasedClick() {
        setShowGreased(!showGreased)
    }

  return (
    <div>
        <button onClick={handleGreasedClick}>{showGreased ? "Show All Pigs" : "Show Greased Pigs"}</button>
    </div>
  )
}
