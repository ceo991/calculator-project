
import React,{ Component } from 'react';
import Display from './components/Display';
import Preview from './components/Preview';
import Buttons from './components/Buttons';
import "./App.css"
class App extends Component{
  
  constructor(props){
    super(props)
    this.state={
      calculation: "",
      prevCalc: ""
    }
    this.entryHandler=this.entryHandler.bind(this)
    this.initiliaize=this.initiliaize.bind(this)
    this.evaluate=this.evaluate.bind(this)
    this.evaluateExpression=this.evaluateExpression.bind(this)
  }

  entryHandler(e){
    let element = e.target.value
    let tempCalc = this.state.calculation.toString()
    let tempPrev = this.state.prevCalc.toString()
    
    if(element === "/" || element === "*" || element === "+" || element === "-" ){

      if(tempPrev.slice(-1)==="."){
        tempCalc=this.state.calculation
      }
      tempPrev = element
    }else{

      if(this.state.calculation === ""){
         
       if(element==="."&&!this.state.prevCalc.toString().split("").includes(".")){
         tempPrev+="0"
       }
      }else{
        if(element==="." && (this.state.prevCalc==="/"||this.state.prevCalc==="*"|| this.state.prevCalc==="-" || this.state.prevCalc==="+" ||this.state.prevCalc==="")){
          tempPrev+="0" 
        }
      }
       
      if(element==="."&&this.state.prevCalc.toString().split("").includes(".")) return
      if(tempPrev === "/" || tempPrev === "*" || tempPrev === "+" || tempPrev === "-"||tempPrev.split("").includes("/")||tempPrev.split("").includes("*")||tempPrev.split("").includes("-")||tempPrev.split("").includes("+")){
       if(element==="."&&!this.state.prevCalc.toString().split("").includes(".")){
         tempPrev="0"+element
       }else{
         tempPrev=element
       }
        
      }else{
         tempPrev += element
      }
    }
    
    if(this.state.calculation === ""){
      if(element==="/" || element==="*" || element==="0" || element==="+" ) return
      if(element==="."){

          tempCalc+="0."
      }else{
          tempCalc = element
      }
    }else{

      if(element==="." && (this.state.prevCalc==="/"||this.state.prevCalc==="*"|| this.state.prevCalc==="-" || this.state.prevCalc==="+" ||this.state.prevCalc==="")){
          tempCalc+="0" 
      }

     if(tempPrev.slice(-1)==="0" && (tempCalc.slice(-1)==="/" || tempCalc.slice(-1)==="*" || tempCalc.slice(-1)==="-" || tempCalc.slice(-1)==="+")) return
      
      if((element==="/" || element==="*" || element==="+")&&(tempCalc.slice(-1)==="/" || tempCalc.slice(-1)==="*" || tempCalc.slice(-1)==="-" || tempCalc.slice(-1)==="+")){

        let tempArr = [...tempCalc];
        let checkArr = tempArr.slice(-2)
        if(checkArr.length>1&&checkArr.includes("-")){
          tempArr.splice(tempArr.indexOf(checkArr[0]),2,element)
          tempCalc=tempArr
          this.setState({calculation: tempCalc})
          return
        }
        tempArr.toString().split("")
        tempArr.pop()
        tempArr.push(element)
        tempArr.join("")
        tempCalc=tempArr
        this.setState({calculation: tempCalc,prevCalc: tempPrev})
        return
      }
      if(element==="-" && tempCalc.slice(-1)==="-")return
      tempCalc += element
    }   

    if(tempCalc[0] ==="/"||tempCalc[0] ==="*"||tempCalc[0] ==="+"){
      let arr = [...tempCalc]
      arr.toString().split("")
      arr.shift()
      arr.join("")
      tempCalc=arr.toString()
    }
    
    this.setState({calculation: tempCalc,prevCalc: tempPrev})
  }
  
  initiliaize(){
    this.setState({calculation: "",prevCalc: "",operands:[] ,operations:[], evaluated:false})
  }
  
  evaluateExpression(fn) {
    return new Function('return ' + fn)();
  }
  
  evaluate(){
    let result = this.evaluateExpression(this.state.calculation)
    this.setState({calculation:result.toString(),prevCalc: result})
  }
  
  render(){
    return (
      <div id="container">
        <div id="calculator">
          <Display prev={this.state.prevCalc} />
          <Preview calculation={this.state.calculation}/>
          <Buttons handleEntry={this.entryHandler} clear={this.initiliaize} evaluate={this.evaluate} />
        </div>
      </div>
    )
  }
}

export default App