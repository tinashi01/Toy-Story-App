import React from 'react';
import NoPageFound from './NoPageFound';
import ViewDetails from './ViewDetails';


function ToyCard({toys, id}) {
    function deleteToy() {
        fetch('http://localhost:3001/toys/' +toys.id, {
          method: "DELETE"
        })
        .then(r => console.log("delete successful"))
        window.location.reload(true);
    }
    

    return (
        <div className="column">
            <li className="card">
                <img className = "toy-image" src={toys.image} alt={toys.name}/>
                <h3>{toys.name}</h3>                   
                {toys.name === "" ? <NoPageFound /> : <ViewDetails id={id}/>}
                <button className="delete" onClick={deleteToy}>🗑</button>
            </li>
        </div>
    )
}

export default ToyCard;