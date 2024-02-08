import React, { Component } from 'react'
import "../App.css"

export default class Home extends Component {
  render() {
    return (
      <div className='flex just-center align-center body'>
        <h1 style={{color:"white"}}>Quiz play</h1>
        <button className='start-btn'>Play</button>
      </div>
    )
  }
}
