
const BASE_URL = 'https://pokeapi.co/api/v2';

// Fetch All Pokemon Categories
export const fetchPokemoCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/type`);
        const pokemons = await response.json();
        return pokemons.results;
    } catch(error) {
        console.error('Failed to fetch Pokémon categories:', error);
        return [];
    }
}

// Fetch Pokemons by Type or Category
export const fetchPokemonByType = async (type: any) => {
    try {
        const response = await fetch(`${BASE_URL}/type/${type}`);
        const pokemons = await response.json();
        const pokemonList = pokemons.pokemon.map((pokemon: any) => ({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
            pokemonId : pokemon.pokemon.url.split('/').slice(-2, -1),
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/').slice(-2, -1)}.png`,
        }));
        return pokemonList;
    } catch(error) {
        console.error(`Failed to fetch Pokémon for type ${type}:`, error);
        return [];
    }
}

// Fetch Pokemon Details by ID
export const fetchPokemonDetails = async (pokemonId: string) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${pokemonId}`);
        const pokemonDetailsRes = await response.json();
        const { name, sprites, stats } = pokemonDetailsRes;
         // Construct the Pokémon details object
        const pokemonDetails = {
            name,
            imageUrl: sprites.front_default,
            stats: stats.map((stat: any) => ({
                name: stat.stat.name,
                base_stat: stat.base_stat,
            })),
        };
        return pokemonDetails;
    } catch(error) {
        console.error('Failed to fetch Pokémon details:', error);
        return null;
    }
}

// Fetch All p=Pokemons
export const fetchAllPokemons = async () => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=1000`);
        const pokemons = await response.json();
        return pokemons.results;
    } catch(error) {
        console.error('Failed to fetch Pokémon list:', error);
        return [];
    }
}

// Fetch Pokemons by Name
export const fetchPokemonByName = async (name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
        const pokemonName = await response.json();
        return pokemonName;
    } catch(error) {
        console.error(`Failed to fetch Pokémon ${name}:`, error);
        return null;
    }
}
