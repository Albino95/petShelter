import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from "./style.module.css"


const AddPet = (props) => {

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkills, setPetSkills] = useState([]);
    const [petSkillOne, setPetSkillOne] = useState("")
    const [petSkillTwo, setPetSkillTwo] = useState("")
    const [petSkillThree, setPetSkillThree] = useState("")

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setPetSkills([petSkillOne, petSkillTwo, petSkillThree])
        axios.post('http://localhost:8000/api/pets', {
            petName,
            petType,
            petDescription,
            petSkills,
        })
        .then((res) => {
            console.log(`you have added the pet ${petName}`)
            navigate('/')
        })
        .catch((err) => {
            console.log(`there was this problem with adding ${petName}: ${err}`)
        })
        
    }

    return (
        <div>
            <Header />

            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Pet name:</label>
                    <input type='text' value = {petName} onChange = {(e) => setPetName(e.target.value)} />
                </div>
                <div>
                    <label>Pet type:</label>
                    <input type='text' value = {petType} onChange = {(e) => setPetType(e.target.value)} />
                </div>
                <div>
                    <label>Pet description:</label>
                    <input type='text' value = {petDescription} onChange = {(e) => setPetDescription(e.target.value)} />
                </div>
                <div>

                    <div>
                        <label>Skill 1::</label>
                        <input type='text' value = {petSkillOne} onChange = {(e) => setPetSkillOne(e.target.value)} />
                    </div>
                    
                    <div>
                        <label>Skill 2::</label>
                        <input type='text' value = {petSkillTwo} onChange = {(e) => setPetSkillTwo(e.target.value)} />
                    </div>

                    <div>
                        <label>Skill 2::</label>
                        <input type='text' value = {petSkillThree} onChange = {(e) => setPetSkillThree(e.target.value)} />
                    </div>

                </div>

                <button type='submit' className={styles.add}>Add Pet</button>

            </form>
        </div>
    )
}

export default AddPet;