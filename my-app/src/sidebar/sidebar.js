import React from 'react'
import './sidebar.css'

const sidebar = () => {
  return (
    <div className = 'sidebar-container'>
      <div>
        <h1>Search Map</h1>
        <input type= 'text' placeholder= 'Type state name for stats...' />
      </div>
    </div>
  )
}


export default sidebar
