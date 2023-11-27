import { SyntheticEvent, useState } from "react";

const SearchPokemon = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(inputValue);
    }

    const handleReset = () => {
        setInputValue("");
    }

    return (
        <>
            <div className="main-container">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Search Pokemon" 
                    value={inputValue} 
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}/>
                    <button type="submit">Search</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
                </form>
            </div>
        </>
    )
}

export default SearchPokemon;