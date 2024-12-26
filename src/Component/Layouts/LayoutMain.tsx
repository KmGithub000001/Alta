import { Link } from 'react-router-dom';
import { Button } from 'antd';

function LayoutMain({ children }) {


  return (
    <>
      <div className='text-center my-3'>
        <Link to={'/'} className='mx-2'>
          <Button className='px-3 py-2'>Home</Button>
        </Link>
        <Link to={'/page'} className='mx-2'>
          <Button className='px-3 py-2'>Page</Button>
        </Link>
        <Link to={'/redux'} className='mx-2'>
          <Button className='px-3 py-2'>Redux</Button>
        </Link>
        <Link to={'/param/001'} className='mx-2'>
          <Button className='px-3 py-2'>Param</Button>
        </Link>
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
export default LayoutMain;