import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"
import Header from './Header'
import style from "./style.module.css"





const AllPirates = () => {

    const [pirates, setPirates] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {
                console.log(`you have sucesully gotten: ${res.data}`)
                setPirates(res.data)
            })
    },[])

    const walkPlank = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pirates/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPirates(pirates.filter((pirate, index)=> pirate._id !== idFromBelow))
            })
    }


    return (
        <div className= {style.body}>
            <Header link = {"/pirates/new"} linkText={"Add a new pirate"} pageObjective = {"Pirate Crew"} />
            <Link to = '/pirates/new' className={styles.headerlink} ><button className={style.add}>Add Pirate</button></Link>
            <div className={styles.commandbox}>
                <div className={styles.commandrow}>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Actions</p>
                </div>
                {
                    pirates.map((pirate, index) => (
                        <div key={index} className='p-5 mb-2 d-flex justify-content-around align-items-center border border-dark' >
                            <img className={styles.listIMG} src = {pirate.piratePhoto} />
                            <p>{pirate.pirateName}</p>
                            <div className=' d-flex justify-content-between'>
                                <Link to = {`/pirates/${pirate._id}`}><button className={style.viewPirate}>View Pirate</button></Link>
                                <button className={style.walkPlank} onClick={() => walkPlank(pirate._id) }>Walk the Plank</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default AllPirates;