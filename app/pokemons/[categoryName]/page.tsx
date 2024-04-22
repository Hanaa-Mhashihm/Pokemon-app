import RelatedPokemons from '../../components/RelatedPokemons'

const PokemonsByTypes = ({ params }: { params: { categoryName: string } }) => {
    return (
        <main>
          {/* <div>My Post: {params.categoryName}</div> */}
          <RelatedPokemons />
        </main>
    )
}

export default PokemonsByTypes