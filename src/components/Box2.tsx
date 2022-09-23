import React, { useState } from 'react'
import {motion} from "framer-motion"
import {createPortal} from 'react-dom'
import "../styles/Box2.css"
function Box2() {
    return createPortal(
          <motion.div className='box-container1'
          drag
          dragConstraints={{
            right:20,
            left: -20,
            top:5,
            bottom:5
          }}>          
          </motion.div>, document.getElementById("Box2") as Element  
   
  )
}

export default Box2