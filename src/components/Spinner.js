import React from 'react'
import loading from './loaading.gif'


const Spinner = () => {
  return (
    <div>
      <img className='my-3' src={loading} alt="loading"/>
    </div>
  )

}

export default Spinner