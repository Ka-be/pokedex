import { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Pokedex from "../components/Pokedex";
import { Pokemon } from "../@types/Pokemon";
import { pokemonsArray } from "../data";
import SearchPokemon from "../components/SearchPokemon";

const PokedexView = () => {
	const [pokemonList] = useState<Pokemon[]>(pokemonsArray);

	return (
		<>
			<HeroSection />
			<SearchPokemon	/>
			<Pokedex pokemonList={pokemonList} />
			<Footer />
		</>
	);
};

export default PokedexView;
