import React from 'react'
import styles from './input.module.css'

const InputText = (props) => {
  function classType() {
    var className = `${styles.inputControl}`
    var disable = ''
    var withtype = ''
    var size = ''
    if (props.disabled) {
      disable = `${styles.inputDisable}`
    }

    if (props.type === 'danger') {
      withtype = `${styles.inputDanger}`
    }else if (props.type === 'success') {
      withtype = `${styles.inputSuccess}`
    }

    if (props.size === 'big') {
      size = `${styles.inputBig}`
    }
    return className+' '+disable+' '+withtype+' '+size
  }
  function classHelper() {
    var className = `${styles.labelHelper}`
    var withtype = ''
    if (props.type === 'danger') {
      withtype = `${styles.helperDanger}`
    }else if (props.type === 'success') {
      withtype = `${styles.helperSuccess}`
    }
    return className+' '+withtype
  }
  return<div className={styles['input-group']}>
    {(props.label) ? <p className={styles.label}>{props.label}</p> :''}
    <input type="text" className={classType()} name="name" disabled={(props.disabled) ? true :false} placeholder={props.placeholder} onChange={(e)=>props.onChange(e)}/>
    {(props.helper) ? <p className={classHelper()}>{props.helper}</p> :''}
  </div>
}
export default InputText;
