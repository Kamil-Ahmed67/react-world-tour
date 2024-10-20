import CountryData from "../CountryData/CountryData";

const CountryDetails = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Detail</h4>
            <hr />
            <CountryData
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;