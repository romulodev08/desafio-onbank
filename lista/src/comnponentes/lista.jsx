import { Component } from "react/cjs/react.development";
import axios from "axios";

export default class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: []
        }
    }
    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
            .then(resposta => {
                const dados = resposta.data.results
                this.setState({ response: dados })
            })
    }
    render() {
        console.log(this.state.response)
        return (
            <div>
                {this.state.response.map(item => <ul key={item.name} >
                    <li>{item.name}</li>
                    <li><a target="_blank" href={item.url}>{item.url}</a></li>
                </ul>)}
            </div>
        )
    }
}