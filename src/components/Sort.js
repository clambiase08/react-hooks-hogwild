import React from 'react'

export default function Sort({ setSortHogs, setShowGreased }) {

    function handleSort(e) {
        const selectedSort = e.target.value
        if (selectedSort === "none") {
            setShowGreased(false)
        }
        setSortHogs(selectedSort)
    }

  return (
    <>
    <div className='ui item'>
      <label>Sort Pigs:</label>
    </div>
    <div className='ui item'> 
        <select className='ui selection dropdown' defaultValue={'none'} onChange={handleSort}> 
        <option value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
    </>
  )
}
