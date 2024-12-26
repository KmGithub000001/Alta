import { useState } from 'react';
import { Button } from 'antd';

function UseState() {
  const [val, setVal] = useState('Default Value');
  
  return (
    <div className='text-center'>
      <h1>{val}</h1>
      <Button onClick={() => { setVal('Clicked!'); }}>Change</Button>
    </div>
  );
}
export default UseState;