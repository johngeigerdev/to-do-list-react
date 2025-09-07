import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import TodosProvider from './TodosContext.jsx'; //can actually import TodosProvider with out curly braces if you have an 'export default todosprovider' statement at end of todoscontext.jsx either option works

function App() {

  return (
    <>
      <main>
        <TodosProvider> {/* the below components are the 'children' of the TodosProvider context in TodosContext.jsx */}
          
          <Header appName="To-Do List with React" />
          <Home />
        
        </TodosProvider>


     </main>
    </>
  )
}

export default App
