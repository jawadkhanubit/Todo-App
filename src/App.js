import React, { Component } from 'react';
import './App.css';
import DisplayTask from './displayTask';
import './todolist.css'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      work:"",
      allWork:[]
    }
            this.inputHandler=this.inputHandler.bind(this);
        this.saveButtonHandler=this.saveButtonHandler.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
  }
  inputHandler(event)
  {
    console.log(event.target.value);
    this.setState({
      work:event.target.value
    });
  }
  saveButtonHandler(event)
  {
       let w=this.state.work;
      // w.push(this.state.work);
      if(w!=='')
      {
      let inputElement={
        text:w,
        key:Math.random()
      }
      
      this.setState((prevState)=>{
        return{allWork:prevState.allWork.concat(inputElement)
           };
         });
         this.setState({work:''});
      console.log(this.state.allWork);
      }
  }

  deleteItem(key)
  {
    // console.log('key in app = '+ key);
    // console.log('task app = '+ this.state.allWork);
     var filterdItem=this.state.allWork.filter(function(item){
         return(item.key !== key);
     });

     this.setState({
       allWork:filterdItem
     });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Todo's </h1>
        <input type='text' placeholder='Write your work...' 
        value={this.state.work} onChange={this.inputHandler}/>
        <button type='Submit' onClick={this.saveButtonHandler}>Add Work</button>
      
        
        
        <DisplayTask entries={this.state.allWork}  delete={this.deleteItem}/>
        
      </div>
      </div>

    );
  }
}
export default App;
