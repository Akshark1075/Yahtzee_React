import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps={
    val:6
  }
  constructor(props){
  super(props);
  this.handleClick=this.handleClick.bind(this)
    }
   getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
  handleClick(){
    this.props.handleClick(this.props.idx)
  }
  render() {
    const myobj={one:1,two:2,three:3,four:4,five:5,six:6}
    
    let num=!this.props.isGameOver?this.getKeyByValue(myobj,this.props.val):'six';
    let isLocked=this.props.locked ? " Die-locked" : "";
    let isDisabled=this.props.disabled;
    let isRolling=this.props.isRolling && !this.props.locked?" Die-rolling":'';
    let gameOver=this.props.isGameOver?" GameOver":''
    let iconClass="Die fas fa-dice-"+num+isLocked+isRolling+gameOver;
    
    return (
      <i
        className={iconClass}
        onClick={this.handleClick}
        disabled={isDisabled}
        
      >
         </i>
    );
  }
}

export default Die;
