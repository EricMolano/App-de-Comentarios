import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

const HomeIconLink = () => {

  return (
      <div className='home-link'>
        <Link to='/'>
    
        <FaHome size={30}></FaHome>

        </Link>
      </div>
  )
}

export default HomeIconLink
