import {createContext, useReducer} from 'react';
import todosReducer from './TodosReducer.js';
export const TodosContext = createContext(''); //leaving initial value blank is ok b/c we will assign it later, this is just to initialize it

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: true},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

export function TodosProvider({children}) {

  const [todos, dispatch] = useReducer(todosReducer, initialTodos); 

  return (
    <>
      <main>
        <TodosContext.Provider value={{todos, dispatch}}>
            {children}  {/* these 'children' are the home, header and other components that we are passing into the App component using the context provider  */}
        </TodosContext.Provider>


      </main>
    </>
  )
}

export default TodosProvider;