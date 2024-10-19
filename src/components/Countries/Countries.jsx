import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    //use state to hold the data
    const [countries,setCountries]= useState([]);
    //use effect to get the data
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response=>response.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;