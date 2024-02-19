import React from 'react'

export const SearchSpace = () => {
  return (
    <div className='search-space' >
        <div className='city-dropdown-container'>
            <select name='cityDropdown' className='city-dropdown'>
                <option selected>Jaipur</option>
            </select>
        </div>
        <div className='seperator'></div>
        <div className='search-bar-container'>
            <input className='search-bar' placeholder='Search for restaurant, cuisine or a dish' type="text" />
        </div>
    </div>
  )
}
