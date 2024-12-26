import { useEffect, useState } from 'react';
import { Button } from 'antd';

function UseEffectDeCo() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log('Called!');
  }, [val]);
  

  return (
    <div className='text-center'>
      <h1>Example Component</h1>
      <Button onClick={() => setVal(state => state + 1)}>{val}</Button>
    </div>
  );
}
export default UseEffectDeCo;