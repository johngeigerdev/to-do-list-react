import {createContext, useReducer, useContext, useState} from 'react';
export const TodosContext = createContext(''); //leaving initial value blank is ok b/c we will assign it later, this is just to initialize it

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: true},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

export function TodosProvider({children}) {

  const [todos, dispatch] = useReducer(todosReducer, initialTodos); 
  const [modalIsActive, setModalIsActive] = useState(false);
  const [filterBy, setFilterBy] = useState('');

  function filteredTodos() {
    switch(filterBy) {
      case 'todo':
        return todos.filter(todo => !todo.isDone);
      case 'done':
        return todos.filter(todo => todo.isDone);
      default:
        return todos;
    }
  }

  return (
    <>
      <main>
        <TodosContext.Provider 
          value={
            {
              todos, 
              dispatch,
              modalIsActive,
              setModalIsActive,
              filterBy,
              setFilterBy,
              filteredTodos
            }
          }>
            {children}  {/* these 'children' are the home, header and other components that we are passing into the App component using the context provider  */}
        </TodosContext.Provider>


      </main>
    </>
  )
}

export function useTodos() {
    return useContext(TodosContext);
}

function todosReducer(todos,action) {

    switch (action.type) {
        case 'deleted': {
            if(confirm('Are you sure you want to delete the to-do?')) {
            return todos.filter(...todo => todo.id !== action.id);
            }
        }
        break;
        case 'added': {
          let newTodo = action.newTodo;
          newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
          console.log(newTodo);
          return [...todos, newTodo];
        }
        case 'toggledIsDone': {
            return (todos.map(todo => {
                if (todo.id === action.id) {
                todo.isDone = !todo.isDone;
                return todo;
                } else {
                return todo;
                }
            }));
        }
    }
}

export default TodosProvider;