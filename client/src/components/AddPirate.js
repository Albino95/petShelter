import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import styles from "./style.module.css"



const AddPirate = (props) => {

    const [pirateName, setPirateName] = useState("");
    const [piratePhoto, setPiratePhoto] = useState("");
    const [trasureChests, setTrasureChests] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const [errors, setError] = useState({})
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates', {
            pirateName,
            piratePhoto,
            trasureChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        })
        .then((res) => {
            console.log(`you have added the pirate ${pirateName}`)
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data)
            console.log(`there was this problem with adding ${pirateName}: ${err}`)
            setError(err.response.data.errors)
            
        })
        
    }

    return (
        <div className={styles.body}>
            <Header pageHeader = {"Add Pirate"} />
            <Link to = "/"><button class = {styles.crew}>Crew Board</button></Link>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Pirate name:</label>
                    <input type='text' value = {pirateName} onChange = {(e) => setPirateName(e.target.value)} />
                </div>
                {
                    errors.pirateName?
                    <span>{errors.pirateName.message}</span>:
                    null

                }
                <div>
                <label>Image URL:</label>
                    <input type='text' value = {piratePhoto} onChange = {(e) => setPiratePhoto(e.target.value)} />
                </div>
                {
                    errors.piratePhoto?
                    <span>{errors.piratePhoto.message}</span>:
                    null
                }
                <div>
                    <label>Trasure Chests:</label>
                    <input type='number' value = {trasureChests} onChange = {(e) => setTrasureChests(e.target.value)} />
                </div>
                {
                    errors.trasureChests?
                    <span>{errors.trasureChests.message}</span>:
                    null
                }

                <div>
                    <label>Pirate Catch Phrase:</label>
                    <input type='text' value = {catchPhrase} onChange = {(e) => setCatchPhrase(e.target.value)} />
                </div>
                {
                    errors.catchPhrase?
                    <span>{errors.catchPhrase.message}</span>:
                    null
                }
                
                <div>
                    <label>Crew Position:</label>
                    <select value={crewPosition} onChange = {(e) => setCrewPosition(e.target.value)} >
                        <option defaultChecked> Please select a position</option>
                        <option>Captain</option>
                        <option>First Mate</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select>
                </div>
                {
                    errors.crewPosition?
                    <span>{errors.crewPosition.message}</span>:
                    null
                }

                <div>
                    <label>Peg Leg</label>
                    <input type='checkbox' defaultChecked = 'true'  onClick= {((e) =>setPegLeg(!pegLeg))} />
                </div>
                <div>
                    <label>Eye Patch</label>
                    <input type='checkbox' defaultChecked = 'true'  onClick= {((e) =>setEyePatch(!eyePatch))} />
                </div>
                <div>
                    <label>Hook Hank</label>
                    <input type='checkbox' defaultChecked = 'true' onClick= {((e) =>setHookHand(!hookHand))} />
                </div>

                <button type='submit'  className={styles.add}>Add Pirate</button>

            </form>
        </div>
    )
}

export default AddPirate;