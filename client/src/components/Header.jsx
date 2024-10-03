import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-5 bg-primary flex justify-between header'>
        <h1 className='text-tertiary text-2xl font-semibold sm:text-xs'>Surya Kurumbang</h1>
        
        <Link to ="/"> <h1 className='text-tertiary text-2xl font-semibold sm:text-xs'>Developer</h1> </Link>
    </div>
  )
}

export default Header