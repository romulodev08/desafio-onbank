import { Component } from "react/cjs/react.development";
import "../estlos/pokemonInfo.css"


export default class PokemonInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chave: null,
            nome: '',
            habilidades: [],
            experienciaBase: null,
            indicesDeJogos: [],
            altura: null,
            peso: null,
            
        }
    }
    componentDidUpdate() {
        //passando os dados do props (dados do pokémon selecionado) para o state desse componente
        if (this.props.dados != undefined /*se os dados do pokemon nao for inderfinido (no caso, o valor inicial é indefinnido pois nenhum pokemon é selecionado) */ && this.props.chave != this.state.chave /*caso o componente ja tenha sido atualizado, a chave do props e a chave do state serão a mesma, então não irá executar a ação de resetetar o state com novas informações e gerar um ciclo infinito*/) {
            this.setState({
                chave: this.props.chave,
                nome: this.props.dados.name,
                habilidades: this.props.dados.abilities,
                experienciaBase: this.props.dados.base_experience,
                indicesDeJogos: this.props.dados.game_indices,
                altura: this.props.dados.height,
                peso: this.props.dados.weight,
            })
            setTimeout(() => {
                console.log(this.props.dados)
                //console.log(this.state.chave)
                //console.log(this.state.nome)
                ///console.log(this.state.habilidades)
                //console.log(this.state.indicesDeJogos)
                console.log(this.state.altura)
                console.log(this.state.peso)
            })
        }
    }
    render() {
        return (
            <section className="telaDeInfoDoPokemon">
                <h2>{ this.state.nome }</h2>
                <h3>habilidades:</h3>
                {
                    this.state.habilidades.map((item, index) => {
                        return(
                            <li key={index}>{ item.ability.name }</li>
                        )
                    })
                }
                <h3>Experiência base:</h3>
                <p>{ this.state.experienciaBase }</p>
                <details>
                    <summary>índices de jogos</summary>
                    {
                        this.state.indicesDeJogos.map((item, index) => {
                            return(
                                <li key={index}>
                                    <p>Índice do jogo: { item.game_index }</p>
                                    <p>Versão: { item.version.name }</p>
                                </li>
                            )
                        })
                    }
                </details>

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