import { TodoItemType } from '../../redux/features/todo/todoSlice';

function TodoItem({ id, completed, title }: TodoItemType) {
  const renderIcon = completed ? (
    <i className="ri-checkbox-circle-line"></i>
  ) : (
    <i className="ri-checkbox-blank-circle-line"></i>
  );

  return (
    <article className="todo-item-wrapper">
      {renderIcon}
      {title}
    </article>
  );
}

export default TodoItem;
