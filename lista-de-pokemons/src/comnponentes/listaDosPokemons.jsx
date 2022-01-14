
import axios from "axios"
import { Component } from "react";
import PokemonInfo from "./informaçãoDoPokemon";
import "../estlos/listaDosPokemons.css"


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
        })
        setTimeout(() => {
            let dados = []
            this.state.response.map((item, index) => {
                axios.get(item.url).then(res => {
                    dados[index] = res.data
                })
            })
            this.setState({ infoPokemons: dados })
        })

    }
    atualizar(chave) {
        this.setState({ chave: chave, switchPokemon: this.state.infoPokemons[chave] })
    }

    render() {
        return (
            <section id="listaContainer">
                {
                    this.state.chave != null ?
                        <PokemonInfo chave={this.state.chave} dados={this.state.switchPokemon} />
                        :
                        <div id="asInfoAparecerãoAqui">
                            <h2>Selecione um Pokémon</h2>
                        </div>
                }
                <div className="listaDosPokemons">
                    {
                        this.state.response != [] ?
                            this.state.response.map((item, index) =>
                                <div className="pokemonItem" key={index} onClick={() => this.atualizar(index)} >{item.name}</div>)
                            :
                            "sem informações"
                    }
                </div>
                
                

            </section>
        )
    }
}

