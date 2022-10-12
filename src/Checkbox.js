import React from 'react'
import styles from './checkbox.module.css'
const InputCheckbox = (props) =>{

  function svgIcon() {
    if (props.checked) {
      if (props.indeterminate) {
        return <svg className={styles.svgIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_139_1876)">
            <rect x="5" y="5" className={styles.svgRect} width="10" height="10" rx="2" fill="#0549CF"/>
            </g>
          </svg>
      }else{
        return <svg className={styles.svgIcon}  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_139_1871)">
          <rect width="20" height="20" rx="5" fill="#0549CF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 4.96967C16.8232 5.26256 16.8232 5.73744 16.5303 6.03033L8.28033 14.2803C7.98744 14.5732 7.51256 14.5732 7.21967 14.2803L3.46967 10.5303C3.17678 10.2374 3.17678 9.76256 3.46967 9.46967C3.76256 9.17678 4.23744 9.17678 4.53033 9.46967L7.75 12.6893L15.4697 4.96967C15.7626 4.67678 16.2374 4.67678 16.5303 4.96967Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_139_1871">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>
      }
    }else {
      return <svg className={styles.svgIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_139_1876)">
        </g>
        </svg>
    }
  }
  return <div className={styles['checkbox-group']}>
    <input type="checkbox" className={styles.checkbox} onChange={()=>props.onChange()}/>
    {svgIcon()}
    <label>{props.label}</label>
  </div>
}
export default InputCheckbox;
