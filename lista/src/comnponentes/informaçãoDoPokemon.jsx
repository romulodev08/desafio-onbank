import { Component } from "react/cjs/react.development";
import "../estlos/pokemonInfo.css"


export default class PokemonInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chave: null,
            nome: "",
            habilidades: [],
            experienciaBase: null,
            indicesDeJogos: [],
            altura: null,
            peso: null,
            itensRetidos: [],
            id: null,
            padrão: null,
            pedido: null,
            espécie: "",
            tipo: "",
            movimentos: [],
            estatisticas: [],
            duendes: []
        }
    }
    componentDidMount() {
        this.carregarDados()
    }
    componentDidUpdate() {
        this.carregarDados()
    }
    carregarDados() {
        //passando os dados do props (dados do pokémon selecionado) para o state desse componente
        if (this.props.dados != undefined /*se os dados do pokemon nao for inderfinido (no caso, o valor inicial é indefinnido pois nenhum pokemon é selecionado) */ && this.props.chave != this.state.chave /*caso o componente ja tenha sido atualizado, a chave do props e a chave do state serão a mesma, então não irá executar a ação de resetetar o state com novas informações e gerar um ciclo infinito*/) {
            let tipos = []
            this.props.dados.types.map((item, index) => {
                tipos[index] = item.type.name.toString()
            })
            this.setState({
                chave: this.props.chave,
                nome: this.props.dados.name,
                habilidades: this.props.dados.abilities,
                experienciaBase: this.props.dados.base_experience,
                indicesDeJogos: this.props.dados.game_indices,
                altura: this.props.dados.height,
                peso: this.props.dados.weight,
                itensRetidos: this.props.dados.held_items,
                id: this.props.dados.id,
                padrão: this.props.dados.is_default,
                pedido: this.props.dados.order,
                espécie: this.props.dados.species,
                tipo: tipos,
                movimentos: this.props.dados.moves,
                estatisticas: this.props.dados.stats,
                duendes: this.props.dados.sprites
            })
            setTimeout(() => {
                //console.log(this.props.dados)
                //console.log(this.state.chave)
                //console.log(this.state.nome)
                ///console.log(this.state.habilidades)
                //console.log(this.state.indicesDeJogos)
                //console.log(this.state.altura)
                //console.log(this.state.peso)
                //console.log(this.state.itensRetidos)
                //console.log(this.state.dados.id)
                //console.log(this.state.padrão)
                //console.log(this.state.pedido)
                //console.log(this.state.espécie)
                //console.log(this.state.tipo)
                //console.log(this.state.movimentos)
                //console.log(this.state.estatisticas)
                //console.log(this.state.duendes)
            })
        }

    }
    render() {
        return (
            <section className="telaDeInfoDoPokemon">
                {
                    this.state.id != null? 
                    <div>
                        
                <h2>{this.state.nome}</h2>
                <h3>Id:</h3>
                <p> {this.props.dados.id} </p>
                <h3>habilidades:</h3>
                {
                    this.state.habilidades.map((item, index) => {
                        return (
                            <li key={index}>{item.ability.name}</li>
                        )
                    })
                }
                <h3>Experiência base:</h3>
                <p>{this.state.experienciaBase}</p>
                <details>
                    <summary>índices de jogos</summary>
                    {
                        this.state.indicesDeJogos.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p>Índice do jogo: {item.game_index}</p>
                                    <p>Versão: {item.version.name}</p>
                                </li>
                            )
                        })
                    }
                </details>
                <h3>Ítens retidos:</h3>
                {
                    this.state.itensRetidos.map((item, index) => {
                        return (
                            <p key={index}>{item.item.name}</p>
                        )
                    })
                }
                <h3>É padrão?:</h3>
                <p>{this.state.padrão ? "sim" : "não"}</p>
                <h3>Pedido:</h3>
                <p>{this.state.pedido}</p>
                <details>
                    <summary><h3>Movimentos:</h3></summary>
                    {
                        this.state.movimentos.map((item, index) => {
                            return (
                                <p key={index}>movimento {index + 1}: {item.move.name}</p>
                            )
                        })
                    }
                </details>
                <h3>Espécie:</h3>
                <p>{this.state.espécie.name}</p>
                <h3>Tipo:</h3>
                <p>{this.state.tipo.toString()}</p>
                <details>
                    <summary>
                        <h3>Estatísticas:</h3>
                    </summary>
                    {
                        this.state.estatisticas.map((item, index) => {
                            return (
                                <p key={index}>
                                    <span>{index + 1}</span>
                                    <li>Estatística base: {item.base_stat.toString()}</li>
                                    <li>Dificuldade: {item.effort.toString()}</li>
                                    <li>Estado: {item.stat.name.toString()}</li>
                                </p>
                            )
                        })
                    }
                </details>
                <details>
                    <summary>
                        <h3>Duendes:</h3>
                    </summary>

                    {this.state.duendes.front_default != null && this.state.duendes.back_default != null ? <div>
                        <p>Padrão:</p>
                        <div>
                            <img src={this.state.duendes.front_default} alt="" />
                            <img src={this.state.duendes.back_default} alt="" />
                        </div>
                    </div> : ""}
                    
                    {this.state.duendes.front_female != null && this.state.duendes.back_female != null ? <div>
                        <p>Fêmea:</p>
                        <div>
                            <img src={this.state.duendes.front_female} alt="" />
                            <img src={this.state.duendes.back_female} alt="" />
                        </div>
                    </div> : ""}

                    {this.state.duendes.front_shiny != null && this.state.duendes.back_shiny != null ? <div>
                        <p>Brilhante:</p>
                        <div>
                            <img src={this.state.duendes.front_shiny} alt="" />
                            <img src={this.state.duendes.back_shiny} alt="" />
                        </div>
                    </div> : ""}
                    
                    {this.state.duendes.front_shiny_female != null && this.state.duendes.back_shiny_female != null ? <div>
                        <p>Fêmea brilhante:</p>
                        <div>
                            <img src={this.state.duendes.front_shiny_female} alt="" />
                            <img src={this.state.duendes.back_shiny_female} alt="" />
                        </div>
                    </div> : ""}
                    
                </details>
                    </div> 
                    :
                     ""
                }
            </section>
        )
    }
}