import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import style from "./style.module.css"


const OnePirate = (props) => {

    const [onePirate, setOnePirate] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const [pegLeg, setPegLeg] = useState(onePirate.pegLeg);
    const [eyePatch, setEyePatch] = useState(onePirate.eyePatch);
    const [hookHand, setHookHand] = useState(onePirate.hookHand);



    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then((res)=> {
            console.log(res)
            console.log(res.data)
            setOnePirate(res.data);
            setEyePatch(res.data.eyePatch);
            setPegLeg(res.data.pegLeg);
            setHookHand(res.data.hookHand);
        })
        .catch((err) => {
            console.log(err)

        })
    }, [])

    useEffect(() => {
        axios.patch(`http://localhost:8000/api/pirates/${id}`, {
            eyePatch: eyePatch,
        })
            .then((res)=> {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [eyePatch])

    useEffect(() => {
        axios.patch(`http://localhost:8000/api/pirates/${id}`, {
            hookHand: hookHand,
        })
            .then((res)=> {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [hookHand])

    useEffect(() => {
        axios.patch(`http://localhost:8000/api/pirates/${id}`, {
            pegLeg: pegLeg,
        })
            .then((res)=> {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [pegLeg])



    const adoptPirate = () => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
    }


    return(
        <div className={style.body}>
            <h1 className={style.center}>Deep Sea Davy</h1>
            <div className= {style.containter}>
                <div className={style.info}>
                    <img className={style.image} src={onePirate.piratePhoto} />
                    <h2>"{onePirate.catchPhrase}"</h2>
                </div>
                <div className={style.about}>
                    <h3>About: {onePirate.pirateName}</h3>
                    <p>Position: {onePirate.crewPosition}</p>
                    <p>Trasure Chests: {onePirate.trasureChests}</p>
                    <hr/>
                    <p>Peg Leg: 
                        {
                            pegLeg? 
                            <p>Yes</p>:
                            <p>No</p>
                        }
                    </p>
                    {
                        pegLeg?
                        <button className='btn-danger' onClick= {(e) => setPegLeg(!pegLeg)}>No</button>:
                        <button className='btn-success' onClick= {(e) => setPegLeg(!pegLeg)}>Yes</button>

                    }
                    <p>Eye Patch: 
                        {
                            eyePatch? 
                            <p>Yes</p>:
                            <p>No</p>
                        }
                    </p>
                    {
                        eyePatch?
                        <button className='btn-danger' onClick= {(e) => setEyePatch(!eyePatch)}>No</button>:
                        <button className='btn-success' onClick= {(e) => setEyePatch(!eyePatch)}>Yes</button>

                    }
                    <p>Hook Hand: 
                        {
                            hookHand? 
                            <p>Yes</p>:
                            <p>No</p>
                        }
                    </p>
                    {
                        hookHand?
                        <button className='btn-danger' onClick= {(e) => setHookHand(!hookHand)}>No</button>:
                        <button className='btn-success' onClick= {(e) => setHookHand(!hookHand)}>Yes</button>

                    }
                </div>

            </div>

        </div>
    )
}

export default OnePirate;