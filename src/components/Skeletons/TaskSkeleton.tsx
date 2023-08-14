function TaskSkeleton() {
  // Not very elegant tbh :/
  const arr = [0, 1, 2, 3, 4];

  const renderSkeletonArray = arr.map((item) => {
    return (
      <div key={item} className="task-skeleton-wrapper">
        <div className="task-skeleton-icon skeleton"></div>
        <div className="task-skeleton-line skeleton"></div>
      </div>
    );
  });

  return <>{renderSkeletonArray}</>;
}

export default TaskSkeleton;
