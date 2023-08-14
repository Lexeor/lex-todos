import { useEffect } from 'react';
import axios from './utils/fetch-facade';

function App() {
  // Functions
  const getTodos = async () => {
    const res = await axios.get('/users/1/todos?_limit=5');
    console.log(res);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2 className="main-header">todos</h2>
        <div className="todos-wrapper">
          <div>Card1</div>
          <div>Card1</div>
          <div>Card1</div>
          <div>Card1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
