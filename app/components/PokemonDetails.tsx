'use client'
import React from 'react';
import { useEffect, useState } from "react";
import Head from 'next/head';
import { useParams } from "next/navigation";
import { fetchPokemonDetails } from '../../services/utils/pokemonApi'
import PokemonStatsChart from '../components/PokemonStatsChart';
import Loader from '../components/Loader';

interface PokemonDetails {
    name: string;
    imageUrl: string;
    stats: { name: string; base_stat: number }[];
}

const PokemonDetails = () => {
    const id = useParams();
    const pokemonId = id.pokemonId;
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
    useEffect(() => {
        const loadPokemonDetails = async () => {
          if (pokemonId) {
            const data = await fetchPokemonDetails(pokemonId as string);
            setPokemonDetails(data);
          }
        };
    
        loadPokemonDetails();
    }, [pokemonId]);
    if (!pokemonDetails) {
        return <div> <Loader /> </div>
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>{pokemonDetails.name} Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-4xl mx-auto py-8">
                <h1 className="text-4xl font-bold text-center mb-8 capitalize">{pokemonDetails.name} Details</h1>

                <div className="flex justify-center items-center">
                <img src={pokemonDetails.imageUrl} alt={pokemonDetails.name} className="w-64 h-64" />
                </div>

                <div className="mt-8">
                    <PokemonStatsChart stats={pokemonDetails.stats} />
                </div>
            </main>
        </div>
    )
}

export default PokemonDetails;