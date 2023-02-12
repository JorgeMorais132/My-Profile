import React from 'react'

export default function ProjectCard(props) {
  
  return (
    <div className='card'>
        <p className='cardTitle'>Card</p>

        <div className='cardBody'>
          <img className='CardArrowUp'></img>
          <p className='descriptionCard'>This will be a small description of the card</p>
          <button className='buttonToLink'><p>Click Here!</p></button>
        </div>

       
    </div>
  )
}
