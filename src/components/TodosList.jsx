import Todo from './Todo.jsx';
import {useState} from 'react';

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: true},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

function TodosList() {

  const [todos, setTodos] = useState(initialTodos);

  function deleteHandler(id) {
    if (confirm('Are you sure you want to delete this todo?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  }

  function toggleIsDoneHandler(id) {
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      }));
  }

  return (
    <>
        <div className="todos">

          {todos.map(todo => 
            <Todo
              deleteTodo ={(id) => deleteHandler(id)}
              toggleIsDone={(id) => toggleIsDoneHandler(id)}
              todo={todo}
              key={todo.id}
            />
          )}

        </div>
    </>
  )
}

export default TodosList