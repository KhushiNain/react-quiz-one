import React, { Component } from 'react';
import "../App.css";

export default class Result extends Component {
  render() {
    return (
      <div className='body flex align-center'>
        <h1 style={{color:"green",padding:"20px"}}>Result</h1>
        <div className="result-bx flex align-center just-center">
            <h2>You need more practice</h2>
            <h1 style={{color:"blue",marginBlock:"20px"}}>Your score is 20%</h1>
            <div className='flex result-text'>
                <span>Total number of questions</span>
                <span>15</span>
            </div>
            <div className='flex result-text'>
                <span>Number of attempted question</span>
                <span>9</span>
            </div>
            <div className='flex result-text'>
                <span>Number of correct answers</span>
                <span>3</span>
            </div>
            <div className='flex result-text'>
                <span>Number of wrong answers</span>
                <span>6</span>
            </div>
        </div>
        <div className="btn" style={{margin:"50px"}}>
            <button className='play-btn'>Play Again</button>
            <button className='home-btn'>Back to home</button>
        </div>

      </div>
    )
  }
}
