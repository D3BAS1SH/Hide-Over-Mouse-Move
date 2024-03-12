import React from 'react'
import { useState,useEffect } from 'react'

const useMousePosition = () => {
    const [mousePosition,setMousePosition]=useState({x:0,y:0});
    useEffect(()=>{
        const update = (e) =>{
            setMousePosition({x:e.clientX,y:e.clientY});
        }
        window.addEventListener('mousemove',update)
        return ()=>{
            window.removeEventListener('mousemove',update)
        }
    },[mousePosition])
  return (
    <div>useMousePosition</div>
  )
}

export default useMousePosition