import React, { Component } from 'react';
import "../App.css";

export default class Quiz extends Component {
  render() {
    return (
      <div className='flex just-center align-center body'>
        <div className='container flex just-center align-center'>
            <h1 style={{paddingBlock:"10px"}}>Question</h1>
            <p style={{position:"relative",right:"600px"}}>1 of 5</p>
            <p style={{paddingBlock:"30px"}}>Which is the only mammal that can jump?</p>
            <div className="options flex just-center align-center">
                <div className='option'>Dog</div>
                <div className="option">Elephant</div>
                <div className="option">Goat</div>
                <div className="option">Lion</div>
            </div>
            <div className="buttons ">
                <button style={{backgroundColor:"blue"}}>Previous</button>
                <button style={{backgroundColor:"green"}}>Next</button>
                <button style={{backgroundColor:"red"}}>Quit</button>
            </div>

        </div>

      </div>
    )
  }
}
