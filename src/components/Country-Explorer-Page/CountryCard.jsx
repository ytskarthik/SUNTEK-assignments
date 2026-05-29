function CountryCard({ country }) {
    return (
        <div className="bg-white border rounded-md p-3">
            <img
                src={country.flags?.png}
                alt={`${country.name?.common} flag`}
                className="w-full h-32 object-cover rounded"
            />

            <div className="mt-3">
                <h3 className="text-lg font-semibold mb-2">{country.name?.common}</h3>
                <p className="text-sm mb-1"><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
                <p className="text-sm mb-1"><strong>Population:</strong> {country.population || "N/A"}</p>
                <p className="text-sm"><strong>Region:</strong> {country.region || "N/A"}</p>
            </div>
        </div>
    )
}

export default CountryCard
