import React from 'react'

export default function ContactCard() {
  return (
    <div className='card'>
        <p className='cardTitle'>Card</p>

        <div className='cardBody'>
          <p>This will be a small description of the card</p>
        </div>

        <button className='buttonToLink'><p>Click Here!</p></button>
    </div>
  )
}
