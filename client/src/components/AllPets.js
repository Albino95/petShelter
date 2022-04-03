import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"
import Header from './Header'





const AllPets = () => {

    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(`you ave sucesully gotten: ${res.data}`)
                setPets(res.data)
            })
    },[])

    const handleClick = (idFromBelow) => {

        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
            .then((deleteThisPet) => {
                console.log(`${deleteThisPet} was deleted succesfully`)
                setPets(pets.filter((Pet, index) => Pet._id !== idFromBelow))
            })
            .catch((err) => {
                console.log(`you cannot delete this Pet from the front end because: ${err}`)
            })
    }



    return (
        <div>
            <Header link = {"/pets/new"} linkText={"add a pet to the shelter"} pageObjective = {"These pets are looking for a home"} />
            <Link to = '/pets/new' className={styles.headerlink} >add a pet to the shelter</Link>
            <div className={styles.commandbox}>
                <div className={styles.commandrow}>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Actions</p>
                </div>
                {
                    pets.map((pet, index) => (
                        <div key={index} className={styles.list}>
                            <p>{pet.petName}</p>
                            <p>{pet.petType}</p>
                            <Link to = {`/pets/{pet._id}`}>details</Link>
                            <Link to = {`/pets/edit/${pet._id}`}>edit</Link>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default AllPets;