import { setFilter } from '../../redux/features/filter/filterSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store';

const buttons = [
  { id: 0, title: 'All' },
  { id: 1, title: 'Active' },
  { id: 2, title: 'Completed' },
];

function Filter() {
  // Redux
  const filter = useAppSelector((state) => state.filter.current);
  const dispatch = useAppDispatch();

  // Functions
  const handleSelectFilter = (filterValue: string) => {
    dispatch(setFilter(filterValue));
  };

  // Renders & Classes
  const renderButtons = buttons.map((button) => {
    const buttonClass =
      filter === button.title ? 'filter-button active' : 'filter-button';

    return (
      <button
        key={button.id}
        className={buttonClass}
        onClick={() => handleSelectFilter(button.title)}
      >
        {button.title}
      </button>
    );
  });

  return <div className="filters-wrapper">{renderButtons}</div>;
}

export default Filter;
