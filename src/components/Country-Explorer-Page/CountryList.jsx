import CountryCard from "./CountryCard"

function CountryList({ countries }) {
    if (countries.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">No countries found</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {countries.map((country) => (
                <CountryCard key={country.name?.common} country={country} />
            ))}
        </div>
    )
}

export default CountryList
