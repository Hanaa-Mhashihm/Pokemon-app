import React from 'react'

const PokemonList: React.FC<{ pokemons: any[] }> = ({ pokemons }) => {
    return (
        <div className="mt-8 grid grid-cols-3 gap-4">
            {pokemons.map((pokemon) => (
                <div key={pokemon.name} className="bg-gray-200 p-4 rounded-lg">
                    <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
                    {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" /> */}
                    <p className="text-center mt-2">{pokemon.name}</p>
                </div>
            ))}
        </div>
    )
}

export default PokemonList;