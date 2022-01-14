import Cabeçalho from "./cabeçalho"
import Lista from "./listaDosPokemons"
import PokemonInfo from "./informaçãoDoPokemon"

export default function Estrutura(props) {
    return (
        <div>
            <Cabeçalho />
            <Lista />
        </div>
    )
}