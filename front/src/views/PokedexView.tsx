import { useState } from "react"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Pokedex from "../components/Pokedex"
import { Pokemon } from "../types/Pokemon"
import { pokemonsArray } from "../data"

const PokedexView = () => {
    const [pokemonList] = useState<Pokemon[]>(pokemonsArray)

    return (
        <>
            <HeroSection/>
            <Pokedex pokemonList={pokemonList}/>
            <Footer/>
        </>
    )
}

export default PokedexView