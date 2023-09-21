import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    const {name, flags, population, area, capital, region} = country;
    
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountry(country);

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags.png} alt={flags.alt} />
            <h3>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br /><br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br /><br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetail>
        </div>
    );
};

export default Country;