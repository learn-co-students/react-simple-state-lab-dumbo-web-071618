import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, index) => <div className="cell" key={index} >
      <Cell value={val}/>
    </div>)
      )

  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div className="row" key={index}>{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: [
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}
