import {
  TodoItemType,
  toggleTodo,
  removeTodo,
} from '../../redux/features/todo/todoSlice';
import { useAppDispatch } from '../../redux/store';

function TodoItem({ id, completed, title }: TodoItemType) {
  // Redux
  const dispatch = useAppDispatch();

  // Functions
  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  // Renders & classes
  const renderIcon = completed ? (
    <i className="ri-checkbox-circle-line"></i>
  ) : (
    <i className="ri-checkbox-blank-circle-line"></i>
  );

  const titleClass = completed ? 'completed' : '';

  return (
    <article className="todo-item-wrapper">
      <button className="toggle-button" onClick={() => handleToggleTodo(id)}>
        {renderIcon}
      </button>
      <span className={titleClass}>{title}</span>
      <button
        className="toggle-button btn-delete"
        onClick={() => handleRemoveTodo(id)}
      >
        <i className="ri-close-line"></i>
      </button>
    </article>
  );
}

export default TodoItem;
