import { useState } from "react"

function SearchBar({ onSearch }) {
    const [input, setInput] = useState("")

    function handleChange(e) {
        const value = e.target.value
        setInput(value)
        onSearch(value)
    }

    return (
        <div className="mb-6">
            <input
               
                type="text"
                placeholder="Search country by name"
                value={input}
                onChange={handleChange}
                className="w-full max-w-md border border-gray-400 rounded-md px-3 py-2"
            />
        </div>
    )
}

export default SearchBar
