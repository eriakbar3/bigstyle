import React from 'react'

import { Button,Text } from 'bigstyle'
import 'bigstyle/dist/index.css'

const App = () => {
  return (
    <>

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
    </div>
    <div>
      <h4>Typography</h4>
      <Text type="label-1" textWeight="regular">Halo, selamat pagi!</Text>
      <Text type="label-1" textWeight="medium">Halo, selamat pagi!</Text>
      <Text type="label-1" textWeight="bold">Halo, selamat pagi!</Text>
      <Text type="label-2" textWeight="regular">Halo, selamat pagi!</Text>
      <Text type="label-2" textWeight="medium">Halo, selamat pagi!</Text>
      <Text type="label-2" textWeight="bold">Halo, selamat pagi!</Text>
      <Text type="label-3" textWeight="regular">Halo, selamat pagi!</Text>
      <Text type="label-3" textWeight="medium">Halo, selamat pagi!</Text>
      <Text type="label-3" textWeight="bold">Halo, selamat pagi!</Text>
      <Text type="label-4" textWeight="regular">Halo, selamat pagi!</Text>
      <Text type="label-4" textWeight="medium">Halo, selamat pagi!</Text>
      <Text type="label-4" textWeight="bold">Halo, selamat pagi!</Text>
    </div>
    </>
  )
}

export default App
