import { useEffect, useRef, KeyboardEvent } from 'react';
import axios from './utils/fetch-facade';
import { useAppDispatch, useAppSelector } from './redux/store';
import TodoItem from './components/TodoItem/TodoItem';
import { addTodo, clearCompleted } from './redux/features/todo/todoSlice';

function App() {
  const refInput = useRef<HTMLInputElement>(null);

  // Redux
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

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
    if (refInput.current && refInput.current?.value !== '') {
      dispatch(
        addTodo({ id: newId, title: refInput.current?.value, completed: false })
      );
      refInput.current.value = '';
    }
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  // Side effects
  useEffect(() => {
    getTodos();
  }, []);

  // Renders & styles
  const renderItems =
    todos.length > 0 ? (
      todos.map((item) => <TodoItem key={item.id} {...item} />)
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
        <div className="todos-footer">
          <span>{`${todos.length} items left`}</span>
          <span>filters</span>
          <button className="inline-button" onClick={handleClearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
