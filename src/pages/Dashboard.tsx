import React, { useEffect } from 'react'

import Nav from '../components/NavBar'
import CompanyData from '../layout/dash/Details'
import Notification from '../layout/dash/Notification'

const Dashboard: React.FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Log user out by redirecting them to login page
      window.location.href = '/'
    }, 60000) // 2 minutes

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='flex mx-8 h-screen font-mono tracking-tighter'>
      <Nav />
      <div className=' mt-24 mb-6 w-full md:block md:w-[70%] text-black border-[#DDE1E3] border-[1px] rounded-lg m-2 bg-cover bg-center'>
        <CompanyData />
      </div>
      <div className='mt-24 mb-6 hidden md:block w-full md:w-[30%] text-black border-[#DDE1E3] bg-[#F7F7F7] border-[1px] m-2 rounded-lg px-4 py-8 justify-center'>
        <Notification />
      </div>
    </div>
  )
}

export default Dashboard
