import React from 'react'
import { useSelector } from "react-redux";

const Intro = () => {
  const {  portfolioData } = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {firstName, lastName, welcomeText, description, caption} = intro
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 sm:gap-3 sm:'>
        <h3 className='text-white'>{welcomeText || ""}</h3>
        <h3 className='text-5xl sm:text-3xl text-secondary font-semibold'>{firstName || ""} {lastName || ""}</h3>
        <h3 className='text-7xl sm:text-3xl text-white font-semibold'>{caption || ""}</h3>
        <p className='text-white w-2/3 sm:w-full'>I am a {description || ""} </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded sm:px-5 sm:py-2'>Get Started</button>
    </div>
  )
}

export default Intro