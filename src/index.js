import React from 'react'
import styles from './styles.module.css'

export {default as Button} from './Button'
export {default as Text} from './Text'
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
