"use client"
import {createContext} from "react";

interface Count{
    [x:string]:any
}

export const CountContext = createContext({} as Count)
