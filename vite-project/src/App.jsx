import { useState } from 'react'
import './App.css'
import Header from './assets/components / Header/Header'
import Homepage from './assets/pages/Homepage/Homepage'
import {userData} from './utils/users.js';

function App() {
  console.log(userData);
  return (
      <div className="app-container">
        <Header />
        <Homepage />
      </div>
  )
}

export default App
