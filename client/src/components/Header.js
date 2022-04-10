import React from 'react'
import styles from './style.module.css'

const Header = (props) => {
    const {pageObjective, pageHeader} = props;

    return (
        <header className={styles.header}>
            <h1>{pageHeader}</h1>
            <h3>{pageObjective}</h3>

        </header> 
    )
}

export default Header