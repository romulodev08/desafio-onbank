import { Component } from "react/cjs/react.development";
import "../estlos/pokemonInfo.css"


export default class PokemonInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chave: null,
            nome: '',
        }
    }
    componentDidUpdate() {
        //passando os dados do props (dados do pokémon selecionado) para o state desse componente
        if (this.props.dados != undefined /*se os dados do pokemon nao for inderfinido (no caso, o valor inicial é indefinnido pois nenhum pokemon é selecionado) */ && this.props.chave != this.state.chave /*caso o componente ja tenha sido atualizado, a chave do props e a chave do state serão a mesma, então não irá executar a ação de resetetar o state com novas informações e gerar um ciclo infinito*/) {
            this.setState({
                chave: this.props.chave,
                nome: this.props.dados.name,
            })
            setTimeout(() => {
                console.log(this.props.dados)
                console.log(this.state.chave)
                console.log(this.state.nome)
            })
        }
    }
    render() {
        return (
            <section className="telaDeInfoDoPokemon">
                <h2></h2> <div className="imgPokemon"><img src="" alt="" /></div>
                <h3>habilidades:</h3>
                <p>nome de cada habilidade n linhas</p>
                <h3>Experiência base:</h3>
                <p>numero</p>


            </section>
        )
    }
}





/*
export default class PokemonInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dados: Global.dadosDosPokemons
        }
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.dados)
            console.log("ajsdnaskj")
        })
    }
    render() {
        return (
            <section className="telaDeInfoDoPokemon">
                <p>{this.props.chave}</p>
            </section>
        )
    }
}
*/