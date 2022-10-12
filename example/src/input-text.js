import React from 'react'
import {InputText} from 'bigstyle'
const Input = ()=>{
  return(
    <>
    <h4>Input Text</h4>
      <div style={{width:"40%"}}>
        <p>Normal Input</p>
        <InputText placeholder="Input placeholder"/>
        <InputText placeholder="Input placeholder" type="success"/>
        <InputText placeholder="Input placeholder" type="danger"/>
        <InputText placeholder="Input placeholder" disabled={true}/>
        <p>Input with label & helper text</p>
        <InputText label="Input label" helper="Input helper text" placeholder="Input placeholder"/>
        <InputText label="Input label" helper="Input helper text" placeholder="Input placeholder" disabled={true}/>
        <InputText label="Input label" helper="Input helper text" type="success" placeholder="Input placeholder"/>
        <InputText label="Input label" helper="Input helper text" type="danger" placeholder="Input placeholder"/>
        <p>Big Input</p>
        <InputText label="Input label" helper="Input helper text" placeholder="Input placeholder" size="big"/>
        <InputText label="Input label" helper="Input helper text" placeholder="Input placeholder" size="big" disabled={true}/>
      </div>
    </>
  )
}
export default Input
