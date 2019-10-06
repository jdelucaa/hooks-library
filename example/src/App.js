import React from 'react';
import { useAxiosGet } from 'hooks-library';

const App = () => {
  const [{ data, isLoading, isError }] = useAxiosGet(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  return (
    <div>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? <div>Loading...</div> : <div>{data && data.title}</div>}
    </div>
  );
};

export default App;
