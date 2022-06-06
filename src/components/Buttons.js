import React, { Component } from 'react';

class Buttons extends Component{
  
    constructor(props){
      super(props)
      
    }
   
    render(){
      return (
        <div id="buttons">
          <button id="clear" value="AC" onClick={this.props.clear}>AC</button>
          <button id="divide" value="/"  onClick={this.props.handleEntry} >/</button>
          <button id="multiply" value="*"  onClick={this.props.handleEntry}>X</button>
          <button id="subtract" value="-"  onClick={this.props.handleEntry}>-</button>
          <button id="add" value="+"  onClick={this.props.handleEntry}>+</button>
          <button id="zero" value="0"  onClick={this.props.handleEntry}>0</button>
          <button id="one" value="1"  onClick={this.props.handleEntry}>1</button>
          <button id="two" value="2"  onClick={this.props.handleEntry}>2</button>
          <button id="three" value="3"  onClick={this.props.handleEntry}>3</button>
          <button id="four" value="4"  onClick={this.props.handleEntry}>4</button>
          <button id="five" value="5"  onClick={this.props.handleEntry}>5</button>
          <button id="six" value="6"  onClick={this.props.handleEntry}>6</button>
          <button id="seven" value="7"  onClick={this.props.handleEntry}>7</button>
          <button id="eight" value="8"  onClick={this.props.handleEntry}>8</button>
          <button id="nine" value="9"  onClick={this.props.handleEntry}>9</button>
          <button id="equals" value="="  onClick={this.props.evaluate}>=</button>
          <button id="decimal" value="."  onClick={this.props.handleEntry}>.</button>
        </div>
      )
    }
  }

export default Buttons;