import { useContext } from "react";
import { PaginationProps } from "../@types/Pokemon";
import { fetchPokemonList } from "../api/fetchPokemonList";
import "../assets/styles/pagination.scss";
import { useTheme } from "../hooks/useTheme";

const Pagination = ({pokemonCount, setPage, setPokemonList}: PaginationProps) => {
    const theme = useContext(useTheme);
    const items = [];
    for (let i = 1; i <= Math.ceil(pokemonCount / 9); i++) {
        items.push(i);
    }

    const handleClick = async (item: number) => {
        const {pokemonData} = await fetchPokemonList(item);
        setPage(item);
        setPokemonList(await pokemonData);
    }

    return (
        <>
            <h2>Theme: {theme}</h2>
            <nav className="pagination">
                <ul>
                    {items.map((item) => (
                        <li onClick={() => handleClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination