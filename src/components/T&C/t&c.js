import React from 'react'
import { Link } from 'react-router-dom'
import "./t&c.scss"

export const TAndC = () => {
  return (
    
       <Link to={"/checkout"} className='TAndC'>proceed to payment</Link>
   
  )
}
