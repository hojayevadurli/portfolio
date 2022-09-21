import React, { useState } from 'react'
import {motion} from "framer-motion"

function Box2() {
    return (
          <motion.div className='box-container'
          drag
          dragConstraints={{
            right:20,
            left: -20,
            top:5,
            bottom:5
          }}> 
             
          </motion.div>
    
   
  )
}

export default Box2