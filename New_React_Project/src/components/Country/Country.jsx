
const Country = ({ country }) => {
    console.log(country.flags.flags.png);
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;