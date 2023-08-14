import { useEffect } from 'react';
import axios from './utils/fetch-facade';
import { useAppSelector } from './redux/store';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
  // Redux
  const todos = useAppSelector((state) => state.todo.todos);

  // Functions
  const getTodos = async () => {
    const res = await axios.get('/users/1/todos?_limit=5');
    console.log(res);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Renders & styles
  const renderItems = todos ? (
    todos.map((item) => <TodoItem {...item} />)
  ) : (
    <>No items to diplay.</>
  );

  return (
    <div className="App">
      <div className="container">
        <h2 className="main-header">todos</h2>
        <div className="todos-wrapper">{renderItems}</div>
      </div>
    </div>
  );
}

export default App;
