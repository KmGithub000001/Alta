import { createContext, useState } from 'react';

const context = createContext({ val: '' });

function Provider({ children }) {
  const [val, setVal] = useState({
    val: 'Example Context',
  });
  return (
    <context.Provider value={val}>
      {children}
    </context.Provider>
  );
}

export default { Provider, context };