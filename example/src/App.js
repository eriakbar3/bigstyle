import React from 'react'

import { Button } from 'bigstyle'
import Input from './input-text'
import Checkbox from './input-checkbox'
import 'bigstyle/dist/index.css'

const App = () => {
  return (
    <>
    <form>
    <div className="box">
      <h4>Button</h4>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="outlined">Outline</Button>
      <Button type="secondary" textOnly={true}>Secondary, Text Only</Button>
      <Button type="outlined" textOnly={true}>Outline, Text Only</Button>
      <Button type="primary" disable={true}>Primary,disabled</Button>
      <Button type="secondary" disable={true}>Secondary,disabled</Button>
      <Button type="outlined" disable={true}>Outline,disabled</Button>
      <Button type="secondary" textOnly={true} disable={true}>Secondary, Text Only,disabled</Button>
      <Button type="outlined" textOnly={true} disable={true}>Outline, Text Only,disabled</Button>
      <Input/>
      <Checkbox/>
    </div>
    </form>

    </>
  )
}

export default App
