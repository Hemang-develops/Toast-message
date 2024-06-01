import { useState } from 'react';
import { ToastMessage } from './components/ToastMessage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastMessage />
    </>
  );
}

export default App;
