import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Pokedex from "../components/Pokedex";
import { Pokemon } from "../@types/Pokemon";
import { pokemonsArray } from "../data";
import SearchPokemon from "../components/SearchPokemon";

const PokedexView = () => {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>(pokemonsArray);

    useEffect(() => {
        console.log("Effect Pokedex View"); // Au chargement du composant, a l'ouverture de la page

        return () => {
            console.log("Pokedex Unmount"); // Lorsque l'on démonte le composant, au changement de la page
        }
    }, [])

    useEffect(() => {
        console.log("Change pokemon list"); // Au changement du state de PokemonList
    }, [pokemonList])

	return (
		<>
			<HeroSection/>
            <SearchPokemon setPokemonList={setPokemonList}/>
            <Pokedex pokemonList={pokemonList}/>
            <Footer/>
		</>
	);
};

export default PokedexView;
