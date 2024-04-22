"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from 'next/link';
import Head from "next/head";
import { fetchPokemonByType } from "../../services/utils/pokemonApi";
import Loader from '../components/Loader';

const RelatedPokemons = () => {
  const name = useParams();
  const categoryName = name.categoryName;
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const loadPokemonByType = async () => {
      if (categoryName) {
        const data = await fetchPokemonByType(categoryName);
        setPokemonList(data);
      }
    };

    loadPokemonByType();
  }, [categoryName]);

  if (!categoryName) {
    return <div> <Loader /> </div>; // Render nothing if categoryName is not defined yet
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{categoryName} Pokémon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 capitalize">
          {categoryName} Pokémon
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pokemonList.map((pokemon) => (
            <Link href={`/pokemonInfo/${pokemon.pokemonId}`}>
                <div
                key={pokemon.name}
                className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-center capitalize mb-2">
                    {pokemon.name}
                    </h2>
                    <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="mx-auto my-4"
                    style={{ maxWidth: "120px" }}
                    />
                </div>
                </div>
            </Link>
            ))}
        </div>
      </main>
    </div>
  );
};

export default RelatedPokemons;
