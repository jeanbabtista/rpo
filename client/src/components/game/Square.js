import React from 'react'

const Square = ({ value, onClick }) => (
  <div>
    <button className="btn" onClick={() => onClick()}>
      {value}
    </button>
  </div>
)

export default Square
