import React from 'react';
import ToyCard from './ToyCard';

function ToysList({toys}) {
    


    return (
        <main>
            <h1>Our Toys</h1>
            <ul className="cards">
            { toys.map((toy) => {
                return <React.Fragment key={toy.id}><ToyCard toys={toy} id={toy.id}/></React.Fragment>
            })}
            </ul>
        </main>
    )
}

export default ToysList;