import { useEffect, useState } from 'react';
import { Button } from 'antd';

function UseEffectNone() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    alert('UseEffect None Dependencies Called!');
  });
  
  return (
    <div className='text-center'>
      <h1>Example useEffect None Dependencies</h1>
      <Button onClick={() => setVal1(state => state + 1)}>{val1}</Button>
      <Button onClick={() => setVal2(state => state + 1)}>{val2}</Button>
    </div>
  );
}
export default UseEffectNone;