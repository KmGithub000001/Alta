import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function Page() {
  const navigator = useNavigate();
  const go = () => {
    navigator('/');
  };
  return (
    <div className='text-center'>
      <h1 className='text-center'>Page</h1>
    </div>
  );
}
export default Page;