import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css"


const EditPirate = (props) => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [pirateName, setPirateName] = useState("");
    const [piratePhoto, setPiratePhoto] = useState("");
    const [trasureChests, setTrasureChests] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setPirateName(res.data.pirateName);
                setPiratePhoto(res.data.piratePhoto);
                setTrasureChests(res.data.trasureChests);
                setCrewPosition(res.data.crewPosition);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pirates/${id}`, {
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
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })

        
    }

    return (
        <div>
            <header>
                <h1>Edit a Pirate</h1>
                <Link to = '/'>Return Home</Link>
            </header>
            <form onSubmit={handleEdit} >
                <div style={{"margin": "30px"}}>
                    <label>Pirate Name</label>
                    <input type='text' value = {pirateName} onChange = {(e) => setPirateName(e.target.value)} />
                </div>
                {
                    errors.pirateName?
                    <span>{errors.pirateName.message}</span>:
                    null
                }
                <div style={{"marginBottom": "30px"}}>
                    <label>Photo URL</label>
                    <input type = 'text' value={piratePhoto} onChange={(e) => setPiratePhoto(e.target.value)} />
                </div>
                {
                    errors.piratePhoto?
                    <span>{errors.piratePhoto.message}</span>:
                    null
                }

                <div style= {{"marginBottom": "30px"}}>
                    <label>Trasure Chests:</label>
                    <input type='number' value= {trasureChests} onChange = {(e) => setTrasureChests(e.target.value)} />
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

                

                <div>

                <div>
                    <label>Peg Leg</label>
                    <input type='checkbox' value={pegLeg} onClick= {((e) =>setPegLeg(!pegLeg))} />
                </div>
                <div>
                    <label>Eye Patch</label>
                    <input type='checkbox' value={eyePatch} onClick= {((e) =>setEyePatch(!eyePatch))} />
                </div>
                <div>
                    <label>Hook Hank</label>
                    <input type='checkbox' value={hookHand} onClick= {((e) =>setHookHand(!hookHand))} />
                </div>
                    
                    
                </div>

                <button type= 'submit' className = {style.edit}>Edit Pirate</button>
            </form>
        </div>
    )
}


export default EditPirate;