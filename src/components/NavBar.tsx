import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// importing image
import Logo from '../assets/Login/Moneey.svg'

const NavBar: React.FC = () => {
  /* AOS*/
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <header className='fixed w-full top-0 border-[#DCE2EA] border-b-[1px] bg-white z-20 '>
      <div
        data-aos='fade-down'
        data-aos-easing='ease-in'
        data-aos-duration={2000}
        className=' pl-8'
      >
        <Link to='/'>
          <img src={Logo} alt='Logo' className='hover:scale-90' />
        </Link>
      </div>
    </header>
  )
}

export default NavBar
