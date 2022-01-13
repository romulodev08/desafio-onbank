import { Component } from "react/cjs/react.development";
import "../estlos/pokemonInfo.css"


export default class PokemonInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoDoPokemon: []
        }
    }
    componentDidMount() {
        this.setState({ infoDoPokemon: this.props.dados })
    }
    componentDidUpdate() {
        //console.log(this.state.infoDoPokemon)
    }
    render() {
        return(
            <section className="telaDeInfoDoPokemon">
                <p>{this.props.chave}</p>
                <p> {  } </p>
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