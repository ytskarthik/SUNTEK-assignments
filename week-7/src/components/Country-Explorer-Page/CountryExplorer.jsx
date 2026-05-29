import SearchBar from "./SearchBar"
import CountryList from "./CountryList"

function CountryExplorer({ countries, loading, error, query, onSearch }) {
    if (loading) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-600">Loading countries...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-red-600">Error: {error}</p>
            </div>
        )
    }

    return (
        <div>
            <SearchBar onSearch={onSearch} />

            <div className="mb-4 text-sm text-gray-600">
                {query ? `Results: ${countries.length}` : `Total countries: ${countries.length}`}
            </div>

            <CountryList countries={countries} />
        </div>
    )
}

export default CountryExplorer
