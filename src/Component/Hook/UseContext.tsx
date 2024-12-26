import { useContext } from 'react';
import context from './ContextProvider';

function UseContext() {
  const info = useContext(context.context);
  return (
    <>
      <h1 className='text-center'>{info.val}</h1>
    </>
  );
}

export default UseContext;