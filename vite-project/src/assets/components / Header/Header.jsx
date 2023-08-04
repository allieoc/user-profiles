import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header-container">
        <button>Show all</button>
        <div className="search-container">
            <input type="text" placeholder="enter country" />
            <button>Search</button>
        </div>
    </div>
  )
}

export default Header