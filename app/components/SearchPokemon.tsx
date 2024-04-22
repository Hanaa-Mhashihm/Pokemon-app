import { fetchPokemonByName } from "@/services/utils/pokemonApi";
import { useState } from "react";

const SearchPokemon: React.FC<{ onSearch: (pokemon: any) => void }> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const handleSearch = async () => {
        if (searchQuery.trim() !== '') {
          const pokemon = await fetchPokemonByName(searchQuery.trim());
          onSearch(pokemon);
        }
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Pokémon by name..."
                className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-500 flex-grow"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2">
                Search
            </button>
        </div>
    )
}

export default SearchPokemon;