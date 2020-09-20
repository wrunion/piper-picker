import React from 'react';

const buttonStyle = {
  margin: ".5em"
}

const Buttons = () => {
  return (
    <div className="buttons">
      <button 
        className="btn btn-success"
        style={buttonStyle}>  
        Pet Piper
      </button>
      <button 
        className="btn btn-danger"
        style={buttonStyle}>
        Ignore Piper
      </button>
    </div>
  )
}

export default Buttons;