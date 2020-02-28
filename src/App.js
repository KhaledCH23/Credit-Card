import React, { Component } from 'react'
import "./App.css"
import logo from "./logo.jpg"
export class App extends Component {
    constructor(props){
        super(props);
        this.state={
            value:"",
            validThru:"",
            name: ""
        }
    }
    
    // fUNCTION CHANGE NAME
    changeName=(e)=> {
    this.setState({name: (e.target.value).toUpperCase()})
  
    }
    
// FUNCTION CHANGE DATE
    
    changeDate=(e)=>{
  if(e.target.value.length<=5 &&  (e.target.value.substring(0,2))<13 ){
   
if(e.target.value.length<=3 && !isNaN(+e.target.value.replace("/",0)) && (e.target.value.substring(0,2))<13 ){
this.setState({validThru : e.target.value})
}
if(e.target.value.length ==2 && this.state.validThru.indexOf("/")==-1 && (e.target.value.substring(0,2))<13) {

this.setState({validThru : e.target.value + "/"  } )
}
if(e.target.value.length>=3 && !isNaN(+e.target.value.replace("/",0)) && (e.target.value.substring(0,2))<13 ){
this.setState({validThru:e.target.value})
}
  }
}
    
//        if(e.target.value.length===2){e.target.value = e.target.value.substring(0,2) + "/" + e.target.value.substring(2)}
   
    
// FUNCTION ONLY NUMBERS

    onChange=(e)=>{
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({value: e.target.value})
      }
   }
    
    //FUNCTION ADD SPACES
    addSpaces = (value) =>{
value= value.toString()
       let  result=""; 
        for(let i=0; i<value.length; i+=4){
            result+=value.slice(i, i+4) + " "
        }
        return result.trim()
        
    }
    
    render() {
        return (
            <div className="App">
                <div className="credit-card">
            <div className="credit-card-data">
            <h1 className="company-name">CREDIT CARD</h1>
            <img className="chip" src="https://pngimage.net/wp-content/uploads/2018/05/chip-credit-card-png-4.png" />
            
            <h3 className="credit-number">{this.addSpaces(this.state.value)}</h3><img className="logo-card" src="https://mk0bfsieletsonlt96u6.kinstacdn.com/wp-content/uploads/2018/09/1200px-Mastercard-logo.svg_.png"/>
            <h3 className="valid-thru">{this.state.validThru}</h3>
            
            <h2 className="name">{this.state.name}</h2>
            </div>
      </div>
      <div className="formulaire">
          <input placeholder="CARD NUMBER" value={this.state.value} onChange={this.onChange} maxLength="16"/>
            <input type="text" placeholder="YOUR NAME" onChange={this.changeName} maxLength="20"/>
            <input placeholder="MM/YY" value={this.state.validThru} onChange={this.changeDate} maxLength="5"/>
            </div>
            </div>
        )
    }
}

export default App






    
 
