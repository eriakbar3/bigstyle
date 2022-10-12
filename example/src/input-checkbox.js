import React,{useState} from 'react'
import {InputCheckbox} from 'bigstyle'

const Checkbox = () =>{
  const [checkboxInd,setCheckboxInd] = useState(false)
  const [checkboxNormal,setCheckboxNormal] = useState(false)
  return (
    <div>
      <h4>Checkbox</h4>
      <div style={{display:'flex',gap:20,padding:"24px 0px"}}>
      <InputCheckbox indeterminate={true} checked={checkboxInd} onChange={()=>setCheckboxInd(!checkboxInd)}/>
      <InputCheckbox checked={checkboxNormal} onChange={()=>setCheckboxNormal(!checkboxNormal)}/>
      </div>
      <div style={{display:'flex',gap:20,padding:"24px 0px"}}>
      <InputCheckbox label="Label" indeterminate={true} checked={checkboxInd} onChange={()=>setCheckboxInd(!checkboxInd)}/>
      <InputCheckbox label="Label" checked={checkboxNormal} onChange={()=>setCheckboxNormal(!checkboxNormal)}/>
      </div>

    </div>
  )
}
export default Checkbox;
