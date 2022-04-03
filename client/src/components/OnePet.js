import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import style from "./style.module.css"
import Header from './Header';


const OnePet = (props) => {

    const [onePet, setOnePet] = useState({})
    const [clicked, setCliked] = useState(false)
    const {id} = useParams();
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter+1)
        setCliked(true)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((response)=> {
            console.log(response)
            console.log(response.data)
            setOnePet(response.data)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [id])



    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
    }


    return(
        <div>
            <h1>Pet Shelter</h1>
            <h3>Details about: {onePet.petName}</h3>
            <button className = {style.adopt}onClick={adoptPet}>Adopt {onePet.petName} {onePet.name}</button>
            <p>Pet type: {onePet.petType}</p>
            <p>Description: {onePet.onePetDescription}</p>
            <p>Description: {onePet.description}</p>
            <hr/>
            <Link to = {"/"}>Return Home</Link>

            if(setCliked==false) {
            <button className = {style.like} onClick= {(e) => handleClick() }>Like {onePet.petName} </button>
            } else {
                <div></div>
            }
       
            
            <p>{counter}</p>
        </div>
    )
}

export default OnePet;