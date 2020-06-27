import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    var hasScored=isNaN(this.props.score)?'RuleRow-active':'RuleRow-disabled'
    var status="RuleRow "+hasScored
     return (
      <tr className={status} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;