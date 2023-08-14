import { useEffect, useRef, KeyboardEvent } from 'react';
import axios from './utils/fetch-facade';
import { useAppDispatch, useAppSelector } from './redux/store';
import TodoItem from './components/TodoItem/TodoItem';
import { addTodo } from './redux/features/todo/todoSlice';

function App() {
  const refInput = useRef<HTMLInputElement>(null);

  // Redux
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  // Functions
  const getTodos = async () => {
    const res = await axios.get('/users/1/todos?_limit=5');
    console.log(res);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (refInput.current?.value !== '' && event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    dispatch(
      addTodo({ id: 0, title: refInput.current?.value, completed: false })
    );
    if (refInput.current) {
      refInput.current.value = '';
    }
  };

  // Side effects
  useEffect(() => {
    getTodos();
  }, []);

  // Renders & styles
  const renderItems =
    todos.length > 0 ? (
      todos.map((item) => <TodoItem {...item} />)
    ) : (
      <>No items to diplay.</>
    );

  return (
    <div className="App">
      <h2 className="main-header">todos</h2>
      <div className="container">
        <div className="input-row">
          <input
            ref={refInput}
            type="text"
            onChange={(e) => e.target.value}
            onKeyDown={handleKeyDown}
          ></input>
          <button onClick={handleAddTodo}>
            <i className="ri-add-circle-line"></i>
          </button>
        </div>
        <div className="todos-wrapper">{renderItems}</div>
      </div>
    </div>
  );
}

export default App;
