import React from 'react'
import loader from '../loader.gif'
function Spinner() {
    const spinnerStyle = {
        height:'10rem'
    }
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)' // Add a semi-transparent background
    };
  return (
    <div style={containerStyle}>
        <img src={loader} style={spinnerStyle} alt=".."/>
    </div>
  )
}

export default Spinner
