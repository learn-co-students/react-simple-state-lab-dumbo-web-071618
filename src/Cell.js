import React, { Component } from 'react'

class Cell extends Component {

    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }

    }

    changeState = () => {
        if (this.state.color === '#F00' ) {
            this.setState({
                color: "#FFF"
            })
        } else {
            this.setState({
                color: '#333'
            })
        }
    }

    render() {
        return (
            <div
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.changeState}
            >
            </div>
        )
    }
}

export default Cell