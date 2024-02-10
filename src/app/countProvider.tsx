"use client"
import React from 'react'
import { CountContext } from './context'
import {useState} from "react"

const CountProvider = ({children}: {children: React.ReactNode  }) => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <CountContext.Provider value={{count,setCount}}>
        {children}
        </CountContext.Provider>
    </div>
  )
}

export default CountProvider