import React from 'react'
import {useState, useEffect} from 'react'
import panel1 from './panel1.jpg'
import panel2 from './panel2.jpg'
import panel3 from './panel3.jpg'
import panel4 from './panel4.jpg'
import panel5 from './panel5.jpg'
import './background.css';

 var height = window.innerHeight
 const style = {
     height: height,
 }

function Background() {
    
   

    const panels = [panel1, panel2, panel3, panel4, panel5]
    
    const [panel,setPanel] = useState('')
    useEffect(() => {
        function ChangeBg(){
           const index = Math.floor((panels.length)*Math.random())
           setPanel(panels[index])

        }
        ChangeBg()
        return () => {}

    },[panel])




  
    return (
        <div className='background' >
            <div id='toplayer'></div>
            <img src={panel} alt='bgpn'/>
        </div>
    )
}


export default Background