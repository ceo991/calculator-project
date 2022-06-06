import React, { Component } from 'react';

class Preview extends Component{
    constructor(props){
     super(props)
   }
   
   render(){
     return (
        <div id="preview">
         <p>{this.props.calculation ===""? 0:this.props.calculation}</p>
       </div>
     )
   }
 }

export default Preview;