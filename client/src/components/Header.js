import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Header = (props) => {
    const {pageObjective} = props;
    return (
        <header className={styles.header}>
            <h1>Pet Shelter</h1>
            <h3>{pageObjective}</h3>

        </header> 
    )
}

export default Header