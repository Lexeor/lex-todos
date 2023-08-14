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

  return <div className="App">todos</div>;
}

export default App;
