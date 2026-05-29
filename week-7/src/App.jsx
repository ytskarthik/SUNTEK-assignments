import './App.css'
import { useEffect, useState } from "react"
import Products from "./components/Products-Page/Products.jsx"
import TaskManager from "./components/TaskManager-App/TaskManager.jsx"
import CountryExplorer from "./components/Country-Explorer-Page/CountryExplorer.jsx"

function App() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [query, setQuery] = useState("")

    useEffect(() => {
        async function fetchCountries() {
            try {
                setLoading(true)
                setError("")

                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")

                if (!response.ok) {
                    throw new Error("Failed to fetch countries")
                }

                const data = await response.json()
                setCountries(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchCountries()
    }, [])

    const filteredCountries = countries.filter((country) =>
        country.name?.common?.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gray-100">
           
            <header className="bg-amber-400 shadow-lg sticky top-0 z-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white py-5 tracking-tight">
                    🛍️ Products Page
                </h1>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <p className="text-center text-gray-500 mb-8 text-lg">Browse our top tech picks</p>
                <Products />
            </main>

            
            <section className="bg-blue-700 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white py-5 tracking-tight">
                    ✅ Task Manager
                </h2>
            </section>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <p className="text-center text-gray-500 mb-8 text-lg">Add, complete, and delete your tasks</p>
                <TaskManager />
            </main>

            {/* ───────── Phase 3 — Country Explorer ───────── */}
            <section className="bg-gray-600 from-teal-500 to-teal-600 shadow-lg sticky top-0 z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white py-5 tracking-tight">
                    🌍 Country Explorer
                </h2>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <p className="text-center text-gray-500 mb-8 text-lg">Browse countries of the world</p>
                <CountryExplorer
                    countries={filteredCountries}
                    loading={loading}
                    error={error}
                    query={query}
                    onSearch={setQuery}
                />
            </main>
        </div>
    )
}
export default App
