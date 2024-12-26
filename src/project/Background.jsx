import React, { useState } from 'react'
import './Background.css'
function Background() {

    const [color, setColor] =useState("teal")
  return (
   <>
   <h2 style={{color:color}}>BACKGROUNDCOLOR CHANGE</h2>
   <div style={{width:"450px",height:"350px", border:`1px soild ${color}`,borderRadius:"10PX",backgroundColor:color}}>

   </div>
   <div className='d-flex justify-content-center align-item-center'>
   <button className='btn btn1'onClick={()=>setColor("violet")}>Violet</button>
   <button className='btn btn2'onClick={()=>setColor("pink")}>Pink</button>
   <button className='btn btn3'onClick={()=>setColor("orange")}>Orange</button>
   <button className='btn btn4'onClick={()=>setColor("grey")}>Grey</button>
   <button className='btn btn5'onClick={()=>setColor("yellow")}>Yellow</button>
   </div>
   </>
  )
}

export default Background