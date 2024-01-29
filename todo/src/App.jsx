import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Todo(props)
{
  const {id,title,description} = props;

  return(
      <div id = {id}>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
  );
}
function App() {

const [todos, setTodos] = useState([{title: 'Sarthak', description: 'Todo Sarthak', id: 1}]);
function addTodo()
{
    setTodos([...todos, {title:"sarthak", description:"hello", id: 1}]);

}

  return (
    <>
        <button onClick={addTodo()}>{"Add Todo"}</button>
        {todos.map((todo) =>
            <Todo title ={todo['title']} description={todo['description']} id={todo['id']}></Todo>
        )}
    </>
  )
}

export default App
