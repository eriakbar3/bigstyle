import React,{useState} from 'react'
import {Switch} from 'bigstyle'

const ToggleSwitch = (props) =>{
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return(
    <>
      <Switch checked={isToggled} onChange={(e)=>onToggle()}/>
      <Switch checked={isToggled} onChange={(e)=>onToggle()} size='big'/>
    </>
  )
}
export default ToggleSwitch;
