import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
constructor(props){
  super(props);
  }
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={!isNaN(scores.ones)?scores.ones:'Ones score as sum of that value'} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" score={!isNaN(scores.twos)?scores.twos:'Twos score as sum of that value'} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" score={!isNaN(scores.threes)?scores.threes:'Threes score as sum of that value'} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" score={!isNaN(scores.fours)?scores.fours:'Fours score as sum of that value'} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" score={!isNaN(scores.fives)?scores.fives:'Fives score as sum of that value'} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" score={!isNaN(scores.sixes)?scores.sixes:'Sixes score as sum of that value'} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={!isNaN(scores.threeOfKind)?scores.threeOfKind:'Three of kind score as sum of all dice'} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind" score={!isNaN(scores.fourOfKind)?scores.fourOfKind:'Four of kind score as sum of all dice'} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={!isNaN(scores.fullHouse)?scores.fullHouse:'Full house scores as flat 25'} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Small Straight" score={!isNaN(scores.smallStraight)?scores.smallStraight:'Small straights score as 30'} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight" score={!isNaN(scores.largeStraight)?scores.largeStraight:'Large straights score as 40'} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee" score={!isNaN(scores.yahtzee)?scores.yahtzee:'Yahtzee scores as 50'} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={!isNaN(scores.chance)?scores.chance:'Score sum of all dice'} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section">
    <h2 style={{display:'block'}}>Total:{this.props.total}</h2>
        </section>
      </div>
    )
  }
}

export default ScoreTable;