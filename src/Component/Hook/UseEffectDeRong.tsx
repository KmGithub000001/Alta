import { useEffect, useState } from 'react';
import { Button } from 'antd';

function UseEffectDeRong() {
  useEffect(() => {
    console.log('Called!');
  }, []);
  
  const [val, setVal] = useState(0);

  return (
    <div className='text-center'>
      <h1>Example Component</h1>
      <Button onClick={() => setVal(state => state + 1)}>{val}</Button>
    </div>
  );
}
export default UseEffectDeRong;