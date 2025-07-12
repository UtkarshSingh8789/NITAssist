import React from 'react'
import { useSelector } from 'react-redux'
const Desktop = () => {
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="min-h-[calc(100vh-3.2rem)] flex justify-center flex-col bg-gradient-to-r from-cyan-200 to-blue-400 ...">
      <div className="md:text-4xl text-2xl flex justify-center items-center pt-10 italic font-bold font-serif">
        <p>WELCOME, {user?.firstName.toUpperCase()} !</p>
      </div>
      <div className="md:w-5/12 w-8/12 mx-auto text-center italic font-medium mt-20">
        <p>
          Welcome aboard! Dive into a wealth of study notes crafted by your peers and professors. Every note you share lights the path for others—upload yours today and be part of a community that grows by lifting each other.
        </p>
      </div>
    </div>
  )
}
export default Desktop