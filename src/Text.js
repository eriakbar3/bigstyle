import React from 'react'
import styles from './text.module.css'
const Text = (props) => {
    function classType() {
        const className = `${styles.p}`
        var type = ''
        var textWeight = ''
        if (props.type === 'label-1') {
            type = `${styles['label-1']}`
        } else if (props.type === 'label-2') {
            type = `${styles['label-2']}`
        } else if (props.type === 'label-3') {
            type = `${styles['label-3']}`
        } else if (props.type === 'label-4') {
            type = `${styles['label-4']}`
        }
        if (props.textWeight === 'regular') {
            textWeight = `${styles['text-regular']}`
        } else if (props.textWeight === 'medium') {
            textWeight = `${styles['text-medium']}`
        } else if (props.textWeight === 'bold') {
            textWeight = `${styles['text-bold']}`
        }
        const combine = className + ' ' + type + ' ' + textWeight
        return combine
    }
    function classTypeH() {
        const className = `${styles.p}`
        var type = ''
        var textWeight = ''
        if (props.type === 'heading-1') {
            type = `${styles['heading-1']}`
        } else if (props.type === 'heading-2') {
            type = `${styles['heading-2']}`
        } else if (props.type === 'heading-3') {
            type = `${styles['heading-3']}`
        } else if (props.type === 'heading-4') {
            type = `${styles['heading-4']}`
        }else if (props.type === 'heading-5') {
            type = `${styles['heading-5']}`
        } else if (props.type === 'heading-6') {
            type = `${styles['heading-6']}`
        }
        if (props.textWeight === 'medium') {
            textWeight = `${styles['text-medium']}`
        } else if (props.textWeight === 'bold') {
            textWeight = `${styles['text-bold']}`
        }
        const combine = className + ' ' + type + ' ' + textWeight
        return combine
    }
    function textType() {
        var type = props.type.slice(0,-2)
        if (type == 'label') {
          return <p className={classType()}>{props.children}</p>
        }else if (type == 'heading') {
          var size = props.type.slice(0)
          return <h1 className={classTypeH()}>{props.children}</h1>
        }
    }

    return textType()
}
const Heading = (props) => {
    function classType() {
        const className = `${styles.p}`
        var type = ''
        var textWeight = ''
        if (props.type === 'heading-1') {
            type = `${styles['heading-1']}`
        } else if (props.type === 'heading-2') {
            type = `${styles['heading-2']}`
        } else if (props.type === 'heading-3') {
            type = `${styles['heading-3']}`
        } else if (props.type === 'heading-4') {
            type = `${styles['heading-4']}`
        }else if (props.type === 'heading-5') {
            type = `${styles['heading-5']}`
        } else if (props.type === 'heading-6') {
            type = `${styles['heading-6']}`
        }
        if (props.textWeight === 'medium') {
            textWeight = `${styles['text-medium']}`
        } else if (props.textWeight === 'bold') {
            textWeight = `${styles['text-bold']}`
        }
        const combine = className + ' ' + type + ' ' + textWeight
        return combine
    }
    return <p className={classType()}>{props.children}</p>
}

export default (Heading,Text)
