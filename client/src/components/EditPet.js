import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css"


const EditPet = (props) => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState([]);
    const [petSkills, setPetSkills] = useState([])
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setSkillOne(res.data.petSkills[0])
                setSkillOne(res.data.petSkills[1])
                setSkillOne(res.data.petSkills[2])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();
        setPetSkills([skillOne, skillTwo, skillThree])

        axios.put(`http://localhost:8000/api/pets/${id}`, {
            petName,
            petType,
            petDescription,
            petSkills

        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })

        
    }

    return (
        <div>
            <header>
                <h1>Edit a Pet</h1>
                <Link to = '/'>Return Home</Link>
            </header>
            <form onSubmit={handleEdit} >
                <div style={{"margin": "30px"}}>
                    <label>Pet Name</label>
                    <input type='text' value = {petName} onChange = {(e) => setPetName(e.target.value)} />
                </div>

                <div style={{"marginBottom": "30px"}}>
                    <label>Pet Type</label>
                    <input type = 'text' value={petType} onChange={(e) => setPetType(e.target.value)} />
                </div>

                <div style= {{"marginBottom": "30px"}}>
                    <label>Description:</label>
                    <input type='text' value= {petDescription} onChange = {(e) => setPetDescription(e.target.value)} />
                </div>

                <div>

                    <div style= {{"marginBottom": "30px"}}>
                        <label>Skill 1:</label>
                        <input type='text' value= {skillOne} onChange = {(e) => setSkillOne(e.target.value)} />
                    </div>

                    <div style= {{"marginBottom": "30px"}}>
                        <label>Skill 2:</label>
                        <input type='text' value= {skillTwo} onChange = {(e) => setSkillTwo(e.target.value)} />
                    </div>

                    <div style= {{"marginBottom": "30px"}}>
                        <label>Skill 3:</label>
                        <input type='text' value= {skillThree} onChange = {(e) => setSkillThree(e.target.value)} />
                    </div>
                    
                    
                </div>

                <button type= 'submit' className = {style.edit}>Edit Pet</button>
            </form>
        </div>
    )
}


export default EditPet;