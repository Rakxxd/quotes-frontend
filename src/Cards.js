import React from 'react'
import PropTypes from 'prop-types'




function Cards({quote: { id, text, author}}) {
  

  return (
  <div className="quote" key={id}>

 <div>
 </div>

  <div>
    <p>{text}</p>
  </div>

  <div>
    <span>Motivation</span>
    <h3>{author}</h3>
  </div>
</div>
)}

Cards.propTypes = {}

export default Cards
