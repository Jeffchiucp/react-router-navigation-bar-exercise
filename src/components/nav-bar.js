import React, { Component } from 'react'
import Button from './button'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedButton: 0 }
  }

  handleClick() {

  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Home</Button>
        <Button onClick={this.handleClick}>Project</Button>
        <Button onClick={this.handleClick}>Info</Button>
      </div>
    )
  }
}
