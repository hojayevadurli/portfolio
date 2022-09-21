import React, { useState } from 'react'
import {motion} from "framer-motion"

function Box1() {
    const [isAnimating, setIsAnimating]= useState(false)
  return (
    <motion.div className='box-container'
     animate={{
        x:isAnimating ? 1750:0,
         opacity:1,
         rotate:360}}
    initial={{opacity:0.1}}
    transition={{
        type:"spring",
        stiffness:60,
        damping:75
    }}
    onClick={()=>setIsAnimating(!isAnimating)}>
        {/* <motion.div className='box' style={{opacity:0.2}} color="red"
        animate={{x:"20rem"}}>
            </motion.div> */}
    </motion.div>
  )
}

export default Box1