import React from 'react'
import Logo from '../img/logo.png'

const LoadingSplash = () => {
  return (
    <>
    <div class="h-screen bg-gradient-to-b from-blue-400 to-blue-100 flex flex-col justify-center items-center">
    <img src={Logo} alt="Logo" className="w-40 h-40 rounded-full mb-4 object-cover" />
    </div>

    </>
  )
}

export default LoadingSplash