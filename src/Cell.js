import React, { Component } from 'react';

export default class Cell extends Component{
  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }

  }

//Create a click listener which, when activated,
//updates the state to the following hex value: '#333'
  handleOnClick = () => {
    this.setState({color: '#333'})
  }

  render(){
    return (
      <div className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleOnClick}>
      </div>
    )
  }
}
