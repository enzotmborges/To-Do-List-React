import React, { useState } from "react";
import App from './App.css';


const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    // impede a pag de recarregar ao clicar nos botões
    setInputValue(e.target.value);
  }

  // adiciona novo toDo
  const handleAddTodo = () => {
    if(inputValue.trim()) { // quebra o valor do inputValue com o trim
      setTodos([...todos, inputValue]) // cria novo array incluindo novos itens
      setInputValue(''); // reseta o valor de setInputValue
    }
  }

  const handleDeleteTodo = (index) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1) // seleciona o item dentro do toDos
    setTodos(updateTodos)
  }

  return (
    <div className="container">
      <h1 className="title">To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className='input-field'

        />
          <button onClick={handleAddTodo} className='add-button'>
            Add
          </button>

          <ul className='todo-list'> {

            todos.map((todo, index) => (
              <li key={index} className='todo-item'>
                <span className="todo-text">{todo}</span>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>

              </li>
            ))
          }

          </ul>

      </div>

    </div>
  )
}