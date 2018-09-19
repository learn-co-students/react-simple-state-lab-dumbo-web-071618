import React, { Component } from 'react'


export default class Cell extends Component  {

  state = {color: this.props.value}

   changeColor = () => {

     this.setState({
     color: '#333'
   })

   }

render(){
  console.log(this.props.value)
  return(
    <div onClick={this.changeColor} className='cell' style={{backgroundColor: this.state.color}}>
    </div>
  )
}
}
