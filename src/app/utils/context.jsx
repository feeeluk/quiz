"use client"

import { useState } from "react"
import { createContext } from "react"

export const fiftyFiftyCount = createContext(0)

export function FiftyFiftyProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <fiftyFiftyCount.Provider value={{count, setCount}}>
            {children}
        </fiftyFiftyCount.Provider>
    )
}