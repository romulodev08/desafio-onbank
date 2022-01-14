import Cabeçalho from "./cabeçalho"
import Lista from "./listaDosPokemons"

export default function Estrutura(props) {
    return (
        <div id="estrutura-do-site">
            <Cabeçalho />
            <Lista />
        </div>
    )
}