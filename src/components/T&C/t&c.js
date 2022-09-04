import React from 'react'
import { Link } from 'react-router-dom'
import "./t&c.scss"

export const TAndC = () => {
  return (
    <section className='TAndC'>
        <div>

        </div>
       <Link to={"/checkout"}>proceed to payment</Link>
    </section>
  )
}
