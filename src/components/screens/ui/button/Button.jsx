import styles from '../button/Button.module.scss'
import cn from 'classnames'
import React from 'react'

const Button = ({ children, clickHandler, size = 'xl' }) => {
    return <div className={styles.wrapper}>
        <button className={cn(styles.button, styles[size])}
        onClick={clickHandler}>
            {children}
        </button>
    </div>
}

export default Button
