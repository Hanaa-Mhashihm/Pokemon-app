import RelatedPokemons from '../components/RelatedPokemons'

const PokemonsByTypes = ({ params }: { params: { name: string } }) => {
    return (
        <main>
          <div>My Post: {params.name}</div>
          <RelatedPokemons />
        </main>
    )
}

export default PokemonsByTypes