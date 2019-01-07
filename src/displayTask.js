import React,{Component} from 'react';
import './todolist.css'

class DisplayTask extends Component
{
    constructor(props)
    {
        super(props);

        this.createTask=this.createTask.bind(this);
    }
   
    createTask(e)
    {
        return(<li key={e.key} onClick={()=>this.deleteTask(e.key)} onMouseHover={'click for remove this task'}>{e.text}</li>);
    }
     deleteTask(key)
    {
    //   console.log('key in task= '+ key);
      this.props.delete(key);  
    }
    render()
    {
        var alltask=this.props.entries;
        var taskList=alltask.map(this.createTask);
        return(
            <ul className='list'>
                {taskList}
            </ul>
        );
    }
}
export default DisplayTask;