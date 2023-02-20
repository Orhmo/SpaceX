import React from 'react'

import Timer from '../../assets/Notifications/timer.svg'

const Notification: React.FC = () => {
  const Not = [
    {
      src: '🎉',
    },
    {
      src: '✨',
    },
    {
      src: '💥',
    },
  ]
  return (
    <div className=' font-mono tracking-tighter'>
      <div className='mt-12 flex bg-[#FEEBEE] rounded-[12px] w-32 h-8 justify-center px-auto'>
        <img src={Timer} alt='timer' className='w-4 hover:animate-bounce' />
        <span className='pt-[7px] pl-1 text-[#E60A2B] text-sm'>Coming soon</span>
      </div>

      <div className='mt-12 bg-white border-[#EBEBEB] border-[1px] h-[207px] w-[327px]'>
        {Not.map((item, index) => (
          <div className='m-4 flex items-center' key={index}>
            <div className=' bg-[#F4F5F5] w-[45px] h-[45px] rounded-[6px] hover:scale-90'>
              <p className='text-[16px] text-center m-3'>{item.src}</p>
            </div>
            <div className='pl-4 hover:animate-bounce transition duration-200'>
              <div className='my-1 animate-pulse  transition duration-1000 bg-[#F5F5F5] w-[194px] h-[14px] rounded-[4px]'></div>
              <div className='animate-pulse transition-transform duration-1000 bg-[#F5F5F5] w-[132px] h-[14px] rounded-[4px]'></div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10 text-center'>
        <h2 className='font-bold text-[24px] text-[#1A1A1A] pb-4 '>📫 Notifications</h2>
        <span className='text-[#595959] text-[16px block'>
          Receive notifcations about your rider performance, efficiency reviews and a lot more
        </span>
      </div>
    </div>
  )
}

export default Notification
