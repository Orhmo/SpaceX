import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../components/UserContext'

import { RiEyeCloseLine } from 'react-icons/ri'
import { BsEye } from 'react-icons/bs'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email === user.email && password === user.password) {
      setUser(user)
      setSuccess(true)
      setError('')
      setTimeout(() => {
        // Redirect the user to the company details page after a delay
        navigate('/dashboard')
      }, 500)
    } else {
      setError('Invalid username or password')
      setSuccess(false)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='flex justify-center align-center overflow-x-hidden my-12 md:my-8'>
      <div className='w-full bg-[#FEF0F2] px-4 py-8 md:py-20 md:px-8'>
        <form onSubmit={handleLogin} className='bg-white shadow-lg rounded-xl px-10 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <div className='my-4'>
              <h1 className='text-[20px] md:text-[24px] font-bold leading-9'>
                Login to your dashboard
              </h1>
              <p className='text-[#858585] text-[12px] md:text-[16px] leading-6'>
                Provide details to login to your account{' '}
              </p>
            </div>

            <label className='block my-8'>
              <span className='text-[#1A1A1A] text-[12px] md:text-[16px] leading-6 font-normal'>
                Email
              </span>
              <div className='mt-1 relative border-[6px] border-[#F0F0F0] rounded-lg'>
                <input
                  className='block w-full border-2 indent-4 py-3 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                  type='email'
                  value={email}
                  placeholder='user@moneeyapp.com'
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </label>

            <label className='block mb-8'>
              <span className='text-[#1A1A1A] text-[12px] md:text-[16px] leading-6 font-normal'>
                Password
              </span>
              <div className='mt-1 relative border-[6px] border-[#F0F0F0] rounded-lg'>
                <input
                  className='block w-full border-2 indent-4 py-3 border-[#1A1A1A] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  placeholder='password'
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div
                  className='b'
                  onClick={togglePassword}
                  style={{
                    position: 'absolute',
                    top: '35%',
                    right: '32px',
                    transform: 'translateY(-50%)',
                  }}
                >
                  {showPassword ? (
                    <BsEye className='absolute cursor-pointer text-[20px]' />
                  ) : (
                    <RiEyeCloseLine className='absolute cursor-pointer text-[20px]' />
                  )}
                </div>
              </div>
            </label>

            <button
              className='cursor-pointer w-full py-3 text-white text-sm md:text-base bg-[#1CC578] rounded-full hover:text-[#1CC578] hover:bg-white hover:border-2 hover:border-[#1CC578]'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
        {success && <p className='text-green-500 mt-4'>Login successful!</p>}
      </div>
    </div>
  )
}

export default Login
