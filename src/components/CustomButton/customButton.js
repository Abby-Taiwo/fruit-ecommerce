import React from 'react'
import "./customButton.scss"

export const CustomButton = ({action,background}) => {
  return (
    <button className='custom-button' style={{background: background}}>{action}</button>
  )
}
