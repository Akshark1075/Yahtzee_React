import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      rolling:false,
      total:0,
      isGameOver:false
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked=this.toggleLocked.bind(this);
    this.animateRoll=this.animateRoll.bind(this);
   
       }
componentDidMount(){
  this.animateRoll();
}
  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6) 
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling:false
      
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
      if(this.state.rollsLeft>0){
        this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  }
  }
  animateRoll(){
    
    
     this.setState({rolling:true},()=>{
      setTimeout(this.roll,1000)
    })
    

    
}

  doScore(rulename, ruleFn) {
    
    if(!this.state.scores[rulename]){
      var curScore=ruleFn(this.state.dice);
    this.setState(st => ({
      scores: { ...st.scores, [rulename]:curScore  },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
      total:st.total+curScore,
      }));
    this.setState(st=>({
      isGameOver:Object.keys(st.scores).every(x=>!isNaN(st.scores[x]))
    }))
    
    this.animateRoll()
  }
}

  

  render() {
    let btnText=this.state.rollsLeft>1?'Rolls':'Roll';
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              disabled={this.state.rollsLeft===0}
              isRolling={this.state.rolling}
              isGameOver={this.state.isGameOver}
            />
            <div className='Game-button-wrapper'>
              {!this.state.isGameOver?
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x)||this.state.rollsLeft <=0||this.state.rolling }
                onClick={this.animateRoll}
              >
                {this.state.rollsLeft} {btnText} Left
              </button>:
              <h1 className='Gameover-title'>Game Over</h1>
              
              }
            </div>
          </section>
        </header>
        <ScoreTable total={this.state.total} doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
