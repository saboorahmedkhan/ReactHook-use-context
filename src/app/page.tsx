"use client";
import {useContext} from "react";
import { CountContext } from "./context";
import Link from "next/link";

// You have Data
// Component A -> Component B (Child) -> Componet C (Child)
// Page 1 -> Page 2 -> Page 3

export default function Home (){
    const obj = useContext(CountContext)
    console.log(obj)
    return (
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-center text-[32px] font-bold"> Context Api</h1>
            <p><Link href="/test">Test</Link></p>
            <p>{obj.count}</p>
            <div className="flex gap-10">
                <button onClick={()=>obj.setCount(++obj.count)}>Increament</button>
                <button onClick={()=>obj.setCount(--obj.count)}>Decreament</button>
            </div>
        </div>
    )
}