import React from 'react'
import styles from './button.module.css'
const Button = (props) => {
  function classType() {
    const className = `${styles.btn}`
    var type = ''
    var textOnly = ''
    var disable = ''
    var size = ''
    if (props.type === 'primary') {
      type = `${styles['btn-primary']}`
    }else if (props.type === 'secondary') {
      type = `${styles['btn-secondary']}`
    }else if (props.type === 'outlined') {
      type = `${styles['btn-outlined']}`
    }
    if (props.textOnly && props.type !== 'primary') {
      textOnly = `${styles['btn-text']}`
    }
    if (props.disable) {
      disable = `${styles['btn-disable']}`
    }
    if (props.size) {
      if (props.size === 'big') {
        size = `${styles['btn-big']}`
      }
    }
    const combine = className+' '+type+' '+textOnly+' '+disable+' '+size
    return combine
  }
  return <button className={classType()}>{props.children}</button>
}
export default Button
