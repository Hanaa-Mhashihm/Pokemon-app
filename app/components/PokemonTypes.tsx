"use client";
import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchPokemon from '../components/SearchPokemon';
import FilterPokemon from '../components/FilterPokemon';
import PokemonList from '../components/PokemonList';
import { fetchPokemoCategories, fetchPokemonByType } from "../../services/utils/pokemonApi";
import { fetchAllPokemons } from '../../services/utils/pokemonApi';
import SearchPokemonList from "./SearchPokemonList";

const PokemonTypes = () => {
  // Show All Pokemon Categories
  const [categories, setCategories] = useState([]);

  // Filter Pokemins
  const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<any[]>([]);
  // Search for Pokemon
  const handleSearch = async (pokemon: any) => {
    if (pokemon) {
      setSearchedPokemons([pokemon]);
    } else {
      setSearchedPokemons([]);
    }
  };

  // Filter Pokemons
  const handleFilter = async (type: string) => {
    const pokemons = await fetchPokemonByType(type);
    setFilteredPokemons(pokemons);
  };

  // Load All Pokemons
  const loadAllPokemons = async () => {
    const pokemons = await fetchAllPokemons();
    setFilteredPokemons(pokemons);
  };
  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchPokemoCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Search or Filter Pokemons */}
      <Head>
        <title>Pokémon Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Search Pokémon</h1>

        <SearchPokemon onSearch={handleSearch} />

        <FilterPokemon onFilter={handleFilter} />

        {/* <div className="mt-8">
          <button onClick={loadAllPokemons} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Show All Pokémon
          </button>
        </div> */}

        {filteredPokemons.length > 0 && <PokemonList pokemons={filteredPokemons} />}
        {searchedPokemons.length > 0 && <SearchPokemonList pokemons={searchedPokemons} />}
      </main>
      {/* <h2>Pokemons111</h2> */}
      <Head>
        <title>Pokémon Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Pokémon Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center capitalize mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-700 text-center">
                  Learn more about{" "}
                  <span className="font-semibold">{category.name}</span> Pokémon
                </p>
              </div>
              <div className="bg-gray-200 text-center py-2">
                <a
                  href={`/pokemons/${category.name}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PokemonTypes;
