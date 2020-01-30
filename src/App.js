import React, { Component } from 'react';
import './app.css';
class App extends Component{
    state={
        count:'0',
    }
handle=(num)=>{
    const { count } = this.state
    this.setState({
        count:count==='0'?String(num):count+num
    })
}
adddot=()=>{
    const { count } =this.state
    if (count.indexOf('.')===-1)
    this.setState({
        count:count+"."
    })
}
reset=()=>{
    const { count } = this.state
    this.setState({
        count:'0'
    })
}
ans=()=>{
    const { count } = this.state
    this.setState({
        count:eval(count)
    })
}
render(){
    return (
        <div classname="maiin">
        <div className="main">
            <h1 className="jay">CALCULATOR</h1>
            <input className="textview" value={this.state.count}></input>
            <table>
                <tr>
                <button className="button bc" onClick={()=>this.reset()}>C</button>
                  <button className="button" onClick={()=>this.handle('%')}>%</button>
                  <button className="button" onClick={()=>this.handle('*')}>*</button>
                  <button className="button" onClick={()=>this.adddot()}>.</button>
                </tr>
                <tr>
                 <button className="button" onClick={()=>this.handle(7)}>7</button>
                 <button className="button" onClick={()=>this.handle(8)}>8</button>
                 <button className="button" onClick={()=>this.handle(9)}>9</button>
                 <button className="button" onClick={()=>this.handle('+')}>+</button>
                </tr>
                <tr>
                 <button className="button" onClick={()=>this.handle(4)}>4</button>
                 <button className="button" onClick={()=>this.handle(5)}>5</button>
                 <button className="button" onClick={()=>this.handle(6)}>6</button>
                 <button className="button" onClick={()=>this.handle('-')}>-</button>
                </tr>
                <tr>
                <button className="button" onClick={()=>this.handle(0)}>0</button>
                 <button className="button" onClick={()=>this.handle(1)}>1</button>
                 <button className="button" onClick={()=>this.handle(2)}>2</button>
                 <button className="button" onClick={()=>this.handle(3)}>3</button>
                </tr>
                <tr><button className="button eq" onClick={()=>this.ans()}>=</button></tr>
            </table>
        </div>
        </div>
    )
}
}
export default App;