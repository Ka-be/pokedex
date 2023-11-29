import { useEffect, useState, useContext } from "react"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Pokedex from "../components/Pokedex"
import { Pokemon } from "../@types/Pokemon"
import SearchPokemon from "../components/SearchPokemon"
import { fetchPokemonList } from "../api/fetchPokemonList"
import { ToastContainer } from "react-toastify"
import { useTheme } from "../hooks/useTheme"

const PokedexView = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokemonCount, setPokemonCount] = useState(0);
    const [page, setPage] = useState(1);
    const [theme, setTheme] = useState('dark');

    // const theme = useContext(useTheme);
    
    const toggleTheme = () => {
        setTheme(theme ==='light' ? 'dark' : 'light');
    }

    useEffect(() => {
        (async () => {
            const { pokemonData, pokemonCount } = await fetchPokemonList(page);

            setPokemonCount(pokemonCount);
            setPokemonList(await pokemonData);
        })();


        return () => {
            console.log("Pokedex Unmount");
        }
    }, [])

    useEffect(() => {
        console.log("Change pokemon list");
    }, [pokemonList])

    return (
        <>
            <ToastContainer />
            <button className="button__theme" onClick={toggleTheme}>Changer le thème : {theme}</button>
            <HeroSection />
            <SearchPokemon setPokemonList={setPokemonList} />
            <useTheme.Provider value={theme}>
                <Pokedex
                    pokemonList={pokemonList}
                    setPokemonList={setPokemonList}
                    pokemonCount={pokemonCount}
                    page={page}
                    setPage={setPage} />
            </useTheme.Provider>
            <Footer />
        </>
    )
}

export default PokedexView