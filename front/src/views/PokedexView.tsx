import { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Pokedex from "../components/Pokedex";
import { Pokemon } from "../@types/Pokemon";
import SearchPokemon from "../components/SearchPokemon";
import { fetchPokemonList } from "../api/fetchPokemonList";
import { ToastContainer } from "react-toastify";

const PokedexView = () => {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
	const [pokemonCount, setPokemonCount] = useState(0);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const { pokemonData, pokemonCount } = await fetchPokemonList(page);

			setPokemonCount(pokemonCount);
			setPokemonList(await pokemonData);
		})();

		return () => {
			console.log("Pokedex Unmount");
		};
	}, []);

	useEffect(() => {
		console.log("Change pokemon list");
	}, [pokemonList]);

	return (
		<>
			<ToastContainer />
			<HeroSection />
			<SearchPokemon setPokemonList={setPokemonList} />
                <Pokedex
                    pokemonList={pokemonList}
                    setPokemonList={setPokemonList}
                    pokemonCount={pokemonCount}
                    page={page}
                    setPage={setPage}
                />
			<Footer />
		</>
	);
};

export default PokedexView;
