import { Component } from "react/cjs/react.development";

export default class Teste1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: ["romulo", 20]
        }
    }
    render() {
        return(
            <div>
                {
                    this.state.array.map((item, index) => {
                        return(<p key={index}>Nome: { item.toString() }</p>)
                        //console.log(item)
                    })
                }
                <button onClick={() => this.setState({ array: ["Martins", 654] })}>clique</button>
            </div>
        )
    }
}