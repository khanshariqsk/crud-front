import React from 'react';
import './PeopleList.css'
const PeopleList = (props) => {
    return (
        <div className="people-list">
            <h2>{props.people.name}</h2>
            <div className="people-actions">
                <button className="people-actions__edit">Edit</button>
                <button className="people-actions__delete">Delete</button>
            </div>
        </div>
    );
}

export default PeopleList;