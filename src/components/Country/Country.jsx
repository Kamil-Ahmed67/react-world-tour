import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const{name,flags,population,area,cca3}=country;
    const [visited,setVisited]= useState(false);
    const handleVisited = () =>{
       setVisited(!visited);
    }
    // const passWithParams=()=>{
    //     handleVisitedCountries(country);
    // }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'Purple' :'Black'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=> handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this country':'I want to visit'}
            <hr />
            <CountryDetails
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}

            ></CountryDetails>
        </div>
    );
};

export default Country;