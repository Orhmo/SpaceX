import React, { useEffect } from 'react'
import Login from '../layout/auth/Login'
import Welcome from '../layout/auth/Welcome'
import { UserContextProvider } from '../components/UserContext'

// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

const Auth: React.FC = () => {
  /* AOS*/
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='flex h-screen font-mono tracking-tighter'>
      <div className='hidden md:block md:w-[45%] bg-cover bg-center'>
        <div data-aos='fade-right' data-aos-easing='ease-in-sine' data-aos-duration={1000}>
          <Welcome />
        </div>
      </div>
      <div className='w-full md:w-[55%] bg-[#FEF0F2] px-4 py-8 md:p-8'>
        <div data-aos='fade-left' data-aos-easing='ease-in-sine' data-aos-duration={2000}>
          <UserContextProvider>
            <Login />
          </UserContextProvider>
        </div>
      </div>
    </div>
  )
}

export default Auth
