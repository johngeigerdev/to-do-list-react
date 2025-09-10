import {useTodos} from '../TodosContext.jsx';
import Todo from './Todo.jsx';


function TodosList() {

  const store = useTodos();

  return (
    <>
        <div className="todos">

{/* The below ternary operator checks if the filteredTodos array is grater than zero, if so, it renders the todos, if not, it displays the msg */}
          {store.filteredTodos().length ? store.filteredTodos().map(todo => 
            <Todo
              todo={todo}
              key={todo.id}
            />
          ) : 'No to-dos to be shown. Try clearing the filter or add a new to-do. Thank you for your attention to this matter.'
        }

        </div>
    </>
  )
}

export default TodosList