import { Component } from "react/cjs/react.development";
import axios from "axios"
import PokemonInfo from "./informaçãoDoPokemon";

export default class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            chave: null,
            infoPokemons: [],
            switchPokemon: []
        }
    }
    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20").then(resposta => {
            const dados = resposta.data.results
            this.setState({ response: dados })
            //console.log(this.state.response)
        })
        setTimeout(() => {
            let dados = []
            this.state.response.map((item, index) => {
                axios.get(item.url).then(res => {
                    dados[index] = res.data
                })
            })
            this.setState({ infoPokemons: dados })
            //console.log(this.state.infoPokemons)
        })

    }
    atualizar(chave) {
        this.setState({ chave: chave, switchPokemon: this.state.infoPokemons[chave] })
    }
    render() {
        return (
            <div>
                {
                    //this.state.chave != null ? <PokemonInfo chave={this.state.chave} dados={this.state.switchPokemon} /> : ""
                }
                {
                    this.state.response.map((item, index) =>
                        <div key={index} onClick={() => this.atualizar(index)} >{item.name}</div>)
                }
            </div >
        )
    }
}
