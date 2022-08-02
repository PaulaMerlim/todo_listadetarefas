import React, { Component } from "react";

export default class Main extends Component {
  state = {
    tarefas: "",
    listaDeTarefas: []
  };
  handleChange = (event) => {
    this.setState({
      tarefas: event.target.value
    });
  };
  handleClick = () => {
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.concat({
        tarefas: this.state.tarefas
      })
    });
  };
  render() {
    return (
      <>
        <h2> Agora vamos fazer nossa lista de tarefas </h2>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}> Enviar</button>
        <div>
          {this.state.listaDeTarefas.map((item) => (
            <ul>
              <li> {item.tarefas}</li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
