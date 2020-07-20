import React,{Component} from 'react';
import Header from './components/Header'
import Submission from './components/Submission'
import './App.css';
import Search from './components/Search'

class App extends Component {

  state = {

    tasks: ['JavaScript', 'React JS ', 'Node.JS '],
    searched :''
  }
 
 
  SubmitForm = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
    alert("You have successfully add " + task)
  };
 
 render(){

  const Filter_Books = this.state.tasks.filter(a =>
    a.toLowerCase().includes(this.state.searched.toLowerCase())
  );

  const Deleting =(d) =>{
  
    const tasks = [...this.state.tasks]
    tasks.splice(d ,1)
    this.setState({ tasks :tasks })
    alert("You have deleted " + this.state.tasks[d])
  
  
  }


 return(


    <div className='wrapper'>
      <div className='card_frame'>
        <br/><br/>
        <Header number_Todos={this.state.tasks.length} />
        <TodoList tasks={Filter_Books} OnDeletion = {Deleting}/>
        <Search changing={e => this.setState({searched: e.target.value })} />
        <Submission onFormSubmit={this.SubmitForm}/>
          </div>
    </div>        

 )
 }

}

const TodoList = (props) => {


  const todos = props.tasks.map((a , index) => {
    return <Todo content={a} key={index}  id={index} OnDeletion={props.OnDeletion} />
  })


  return( 
    <div className='list-wrapper'>
    {todos}
    </div>
  );
}



const Todo = (props) => {

  return(
    <div className='list-item'>
      {props.content}
      <button id="delete" onClick ={() => {props.OnDeletion(props.id)}}   >DELETE</button>
    </div>
  );
}

export default App


