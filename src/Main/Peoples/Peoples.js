import React from 'react';
import PeopleLists from './PeopleLists'
const Peoples = () => {
    const Peoples = [
        {
            id:"01",
            name:"Khan shariq",
            email:"khanshariq@test.com",
            state:"maharashtra",
            country:"India"

        },
        {
            id:"02",
            name:"Khan Tariq",
            email:"khantariq@test.com",
            state:"maharashtra",
            country:"India"

        },
    ]
    return (
        <PeopleLists peoples={Peoples}/>
    );
}

export default Peoples;