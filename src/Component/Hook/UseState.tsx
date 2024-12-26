import { useState } from 'react';
import { Button } from 'antd';

function UseState() {
  const [val, setVal] = useState(0);

  return (
    <div className='text-center'>
      <h1>{val}</h1>
      <Button onClick={() => setVal(val + 1)}>Change</Button>
    </div>
  );
}
export default UseState;