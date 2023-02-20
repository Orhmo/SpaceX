import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Login/Moneey.svg'
import Check from '../../assets/Login/check.svg'
import { Blob, Blob2 } from '../../utils/Data'

interface BlobItem {
  src: string
  style: string
  head: string
  des: string
}

const Welcome: React.FC = () => {
  return (
    <div className='flex flex-col overflow-y-hidden mx-8 my-12 md:my-8'>
      <Link to='/'>
        <div>
          <img src={Logo} alt='Moneey Logo' className='hover:scale-90' />
        </div>
      </Link>
      <div className='mt-4 mx-4'>
        <h1 className='text-[32px] text-[#1A1A1A] leading-10 tracking-[-0.5px]'>
          {' '}
          Hi there, see what’s new{' '}
        </h1>
        <p className='text-[16px] text-[#595959] leading-6 tracking-[0.3px] pt-2'>
          {' '}
          Here’s how Foodcourt helps you manage your daily operations and ensure your riders are
          efficient
        </p>

        <div className='mt-8 bg-[#FFFFFF] p-2 rounded-lg '>
          {Blob.map((item: BlobItem, index: number) => (
            <div className='flex items-center pb-8' key={index}>
              <div className={item.style}>
                <img
                  src={item.src}
                  alt=''
                  className='lg:w-full hover:animate-bounce hover:transition-transform hover:duration-300'
                />
              </div>
              <div className='pl-4'>
                <h2 className='text-[#858585] text-[16px] leading-8 tracking-[-0.3px]'>
                  {item.head}
                </h2>
                <p className='text-[#73798C] text-[12px] leading-5 font-[500] pr-16'>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-[#F8F8F6] p-2 rounded-lg '>
          {Blob2.map((item: BlobItem, index: number) => (
            <div className='flex items-center' key={index}>
              <div className={item.style}>
                <img
                  src={item.src}
                  alt=''
                  className='lg:w-full hover:animate-bounce hover:transition-transform hover:duration-300'
                />
              </div>
              <div className='pl-4'>
                <h2 className='text-[#858585] text-[16px] leading-8 tracking-[-0.3px]'>
                  {item.head}
                </h2>
                <p className='text-[#73798C] text-[12px] leading-5 font-[500]'>{item.des}</p>
              </div>
              <>
                <img src={Check} alt='' />
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome
