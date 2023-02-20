import React, { createContext, useState } from 'react'

type User = {
  email: string
  password: string
}

type UserContextValue = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const defaultUser: User = {
  email: 'example@example.com',
  password: 'password',
}

type UserContextProviderProps = {
  children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({
  user: defaultUser,
  setUser: () => {
    throw new Error('setUser function must be overridden')
  },
})
const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
