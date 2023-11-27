import { SyntheticEvent, useState } from "react";
import { SearchPokemonProps } from "../@types/Pokemon";
import { pokemonsArray } from "../data";



const SearchPokemon = ({pokemonList, setPokemonList}: SearchPokemonProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        
        pokemonsArray.map((pokemon) => {
            if(pokemon.name === inputValue){
                setPokemonList([pokemon]);
            }
        })
    }

    const handleReset = () => {
        setInputValue("");
        setPokemonList(pokemonsArray);
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