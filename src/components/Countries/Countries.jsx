import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    //use state to hold the data
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);
    //use effect to get the data
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisitedCountries=country=>{
       const newVisitedCountries=[...visitedCountries,country];
       setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags=flag=>{
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }
    //remove item from an array in a state
    //use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* Visited Country */}
            <div>
                <h3>Visited Countries:{visitedCountries.length}</h3>
                <ul>
                 {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                 }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx)=> <img key={idx}   src={flag}></img>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;