import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate()
  return (
    <div className=' flex justify-center'>
      <div className=' bg-gray-50 p-20 rounded shadow-lg mt-20 border border-purple-400 animate__animated animate__fadeInDown'>
         <h1 className='text-primary text-4xl tracking-wide font-semibold my-5'>Thanks For Purchasing</h1>
         <button onClick={() => navigate('/')} className='transform transition hover:scale-105 px-5 py-2 uppercase shadow-lg border border-primary text-primary rounded'>Go Shopping</button>
      </div>
    </div>
  )
}

export default Success