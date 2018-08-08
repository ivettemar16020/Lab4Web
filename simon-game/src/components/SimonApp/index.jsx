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
      lim: 4, 
    };
  }

  _changeLight() {
    if(this.state.round < 4){
      if(this.state.list.length <= this.state.round){
        const {
          currentLight,
          colors,
          list,
          round,
          lim, 
          playerTurn, 
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
      playerList: [], 
      lim: 1,
      currentLight: 0,
      playerTurn: false, 
    })
  }

  _clickedPlayer = (colInfo) => {
    const { list, playerList, playerTurn } = this.state;
    playerList.push(colInfo);
    this.setState({ playerList: playerList });
    
    console.log(playerList);
  }

  _game() {
    const { list, playerList, playerTurn, round, lim  } = this.state;
    if(playerTurn === false){
      this._startRotating();
      if(round <= lim){
        this.setState({ playerTurn: true });
      }
    }
    if(playerTurn === true ){
      this._clickedPlayer();
      if(playerList.length <= list.length){
        this.setState({playerTurn: false}); 
      }
      //this.setState({playerTurn: false}); 
    }
    //console.log(list);
  }

  render() {
    const { colors, currentLight } = this.state;
    return (
      <Fragment>
        <SimonLight
          colors={colors}
          clicked={this._clickedPlayer}
          turnedOnLight={colors[currentLight]}
        />
        <br/>
        <button onClick={this._game.bind(this)}>Empezar</button>
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