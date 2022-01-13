import { Component } from "react/cjs/react.development";
import axios from "axios";
import PokemonInfo from "./informaçãoDoPokemon";

export default class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            chave: null,
            infoPokemon: []
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
                axios.get(item.url).then( res => {
                    dados[index] = res.data
                })
            })
            this.setState({ infoPokemon: dados })
            console.log(this.state.infoPokemon)     
        })
    }
    render() {
        return (
            <div>
                <PokemonInfo chave={this.state.chave} dados={this.state.infoPokemon} />
                {
                    this.state.response.map((item, index) => 
                    <div key={index} onClick={() => this.setState({ chave: index })} >{item.name}</div>)
                }
            </div >
        )
    }
}
