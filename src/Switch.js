import React from 'react'
import styles from './switch.module.css'

const Switch = (props) =>{

  return <label className={styles["toggle-switch"]} style={(props.size == 'big' ? {width:56,height:32} : {width:36,height:20})}>
      <input type="checkbox" checked={props.checked} onChange={(e)=>props.onChange(!props.checked)} />
      <span className={(props.size == 'big') ? styles.switchBig : styles.switch}  />
    </label>
}

export default Switch;
