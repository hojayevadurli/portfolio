import React, { useState } from 'react'
import {motion} from "framer-motion"

function Box3() {
    const [isAnimating, setIsAnimating]= useState(false)
  return (
    <motion.div className='box-container'
    animate={{
        scale:[1,1.4,1.4,1,1],
        borderRadius:["20%","20%","50%","50%","20%"]
    }}
    transition={{
        duration:2
    }}
     >
        
    </motion.div>
  )
}

export default Box3