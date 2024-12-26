import { createContext, useState } from 'react';

const context = createContext({ val: '' });

function Provider({ children }) {
  const [val, setVal] = useState({ val: '' });

  setVal({
    val: 'Example Context',
  });

  return (
    <context.Provider value={val}>
      {children}
    </context.Provider>
  );
}

export default { Provider, context };