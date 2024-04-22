import PokemonDetails from '../../components/PokemonDetails'

const PokemonInfo = ({ params }: { params: { pokemonId: string } }) => {
    return (
        <main>
          {/* <h2>Pokemon Details</h2> */}
          <PokemonDetails />
        </main>
    )
}

export default PokemonInfo