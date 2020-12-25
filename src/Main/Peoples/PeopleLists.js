import React from 'react';
import PeopleList from './PeopleList'
import "./PeopleLists.css"
const PeopleLists = (props) => {
    return (
        <div className="peoples-container"> 
            {props.peoples.map(people=><PeopleList people={people}/>)}
        </div>
    );
}

export default PeopleLists;