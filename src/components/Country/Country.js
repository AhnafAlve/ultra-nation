import React from 'react';

const Country = (props) => {
    const {name, population, capital, flag} = props.country;
    const flagStyle = {height:"50px"}
    const countryStyle = {border:'1px solid red',  margin:'10px', padding:'10px' }
   const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle}>
            <h2>This is: {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <h3>This is capital: {capital} </h3>
            <p> population: {population}</p>
            <button onClick={ ()=>handleAddCountry (props.country)}>Add Country</button>
        </div>
    );
};

export default Country;