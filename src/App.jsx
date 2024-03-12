import { useState } from 'react';
import './App.scss'
import useMousePosition from './useMousePosition'
import { backOut, motion } from 'framer-motion';
function App() {
  const {x,y}=useMousePosition();
  const [isHovered,setIsHovered] = useState(false)
  const size=isHovered?500:40;
  return (
    <main className='main'>
      <motion.div className="mask"
      animate={{
        WebkitMaskPosition:`${x- size/2}px ${y- size/2}px`,
        WebkitMaskSize:`${size}px`,
      }}
      transition={{type:'tween',ease:backOut}}>
        <p onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>Visual desinger - with skills that haven't been replaced by A.I(yet)  - making good shit only if the paycheck is equall good.</p>
      </motion.div>
      <div className="body">
        <p>
          I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  )
}

export default App
