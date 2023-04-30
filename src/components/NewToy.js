import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function NewToy () {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [adopted, setAdopted] = useState(false);
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    function addToy(e) {
        
        e.preventDefault()
        const formData = {name, image, description, adopted}
        console.log(JSON.stringify(formData));
        fetch("http://localhost:3001/toys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(() => {
                // redirect /toys/:id 
                navigate("/toys");
                window.location.reload(true);
            })
           
    }



    return (
        <section className="section">
            <h1>Add your Toys</h1>
            <form className="form" onSubmit={addToy}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} placeholder="Enter Toy's name" onChange={e => setName(e.target.value)} />
                <label htmlFor="image">Image:</label>
                <input type="text" id="image" value={image} placeholder="Enter an existing link to Toy's image" onChange={e=> setImage(e.target.value)} />
                <label htmlFor="personality">Personality:</label>
                <textarea id="personality" value={description} rows="6" placeholder="Enter Toy's personality details" onChange={e => setDescription(e.target.value)} />
                <label htmlFor="adopted">Adopted:</label>
                <input type="checkbox" id="adopted" value={adopted} onChange={() => setAdopted(prevAdopted => !prevAdopted)} />
                <button type="submit" onClick={() => alert("Your toy has been added. Redirecting...")} >Submit</button>
            </form>
                
        </section>
        
    )
}

export default NewToy;