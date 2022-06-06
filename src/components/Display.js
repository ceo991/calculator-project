import React, { Component } from 'react';

class Display extends Component{
    constructor(props){
     super(props)
     
   }
   
   render(){
     return (
        <div id="display">
         <p>{this.props.prev===""? "0" : this.props.prev}</p>
       </div>
     )
   }
 }
 

export default Display;