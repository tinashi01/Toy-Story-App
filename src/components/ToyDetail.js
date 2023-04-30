import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Button from './Button'

function ToyDetail () {
    const [toy, setToy] = useState(null);
    const {id} = useParams();

    useEffect (() => {
        fetch(`http://localhost:3001/toys/${id}`)
            .then(r => r.json())
            .then(json => {
                if (json.name !== "") {
                    setToy(json)
                } else {
                    setToy({});
                }
            });
    }, [id])

    if (!toy) return <h2>Loading...</h2>

    const {name, image, description, adopted} = toy

    return (
        <React.Fragment>
           { (name && description)
           ?
                <div className="individual-card">
                    <h3>{name}</h3> 
                    <img className="individual-image" src={image} alt={name}/>
                    <h4>Personality</h4>
                    <p>{description}</p>
                    <h4>Adoption Status</h4>
                    {adopted ? 'Has owner' : 'Available to adopt'}
                </div>
            :
            <h3>No Toy Found!</h3>
           }
        </React.Fragment>
    )

}

export default ToyDetail;