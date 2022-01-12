import { Component } from "react/cjs/react.development";
import axios from "axios";

export default class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            dadosDosPokemons: ['']
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
            this.setState({dadosDosPokemons: dados})
            //console.log(this.state.dadosDosPokemons)
        })
    }
    render() {
        //console.log(this.state.response)
        //console.log(this.state.dadosDosPokemons)
        return (
            <div>
                {
                    this.state.response.map((item, index) => <ul key={index} >
                        <li>{item.name}</li>
                        <li><a target="_blank" href={item.url}>{item.url}</a></li>
                    </ul>)
                }
            </div >
        )
    }
}