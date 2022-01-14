
//import axios from "axios"
import { Component } from "react";
//import PokemonInfo from "./informaçãoDoPokemon";


export default class Lista extends Component {
    /*
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
    */
    render() {
        return(
            <section>
                olá mundo rosoudbfvisdbfci
            </section>
        )
    }
}

