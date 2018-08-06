import React, { Fragment } from 'react';

import { getRndInteger } from '../../utils/random';
import SimonLight from '../SimonLight';
import './simonapp.css'


class SimonApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLight: 0,
      colors: ['green', 'yellow', 'blue', 'red'],
      list: [],
      playerList: [],
      round: 0,
      playerTurn: false,
    };
  }

  _changeLight() {
    if(this.state.list.length <= this.state.round){
      const {
        currentLight,
        colors,
        list,
        round,
      } = this.state;
      this.setState({
        currentLight: (currentLight + getRndInteger(0,3)) % colors.length,
        round: round + 1,
        })
      let element = this.state.list;
      element.push(currentLight);

      this.setState({ list: element });
      console.log(list);
      //console.log(`lenght ${this.state.list.length}`);
    }
  }

  _startRotating() {
    const timer = setInterval(this._changeLight.bind(this), 500);
    this.setState({
      timer,
    });
  }

  _changeFlag(){
    if(this.state.playerTurn === false){
      this.setState({playerTurn: true});
    }
    else{
      this.setState({playerTurn: false});
    }
  }

  _stopRotating() {
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({
      list: [],
      round: 0,
    })
  }

  render() {
    const { colors, currentLight } = this.state;
    return (
      <Fragment>
        <SimonLight
          colors={colors}
          turnedOnLight={colors[currentLight]}
        />
        <br/>
        <button onClick={this._startRotating.bind(this)}>Empezar</button>
        <button onClick={this._stopRotating.bind(this)}>Reiniciar</button>
      </Fragment>
    );
  }
}


export default SimonApp;

// let currentInterval = 0;

// for(let i = 0; i < 10; i++) {
//   const startTimeout = (
//     lInterval => setTimeout(() => {
//       // Encender la luz
//       currentInterval = lInterval;
//     }, timeout)
//   )(i);
// }