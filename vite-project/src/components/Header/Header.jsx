import React from 'react'
import './Header.css'

function Header({userData, setUsers}) {
  //create state for user input
  const [country, setCountry] = React.useState('')

  const showAll = () => {
    console.log("show all")
    //set users to the original data
    setUsers(userData)
  }

  const handleInput = (e) =>{
    // console.log(e.target.value);
    //store in state
    setCountry(e.target.value);
  }

  const handleSearch = () => {
    console.log("search for ", country);
    //filter userData to get the users from this country only
    console.log(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
    //store this data in users
    setUsers(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
    //clear textbox
    setCountry("")
  }

  return (
    <div className="header-container">
        <button onClick={showAll}>Show all</button>
        <div className="search-container">
            <input onChange={handleInput} type="text" placeholder="enter country" value={country} />
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Header