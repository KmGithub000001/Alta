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
      </div>

      <div className="text-center">
        <Link to={'/param/001'} className='mx-2'>
          <Button className='px-3 py-2'>Param 001</Button>
        </Link>
        <Link to={'/param/005'} className='mx-2'>
          <Button className='px-3 py-2'>Param 005</Button>
        </Link>
        <Link to={'/param/test'} className='mx-2'>
          <Button className='px-3 py-2'>Param test</Button>
        </Link>
        <Link to={'/param/test02'} className='mx-2'>
          <Button className='px-3 py-2'>Param test02</Button>
        </Link>
      </div>

      <div className='text-center my-3'>
        <Link to={'/usestate'} className='mx-2'>
          <Button className='px-3 py-2'>useSate</Button>
        </Link>
        <Link to={'/usememo'} className='mx-2'>
          <Button className='px-3 py-2'>useMemo</Button>
        </Link>
        <Link to={'/usecontext'} className='mx-2'>
          <Button className='px-3 py-2'>useContext</Button>
        </Link>
        <Link to={'/usereducer'} className='mx-2'>
          <Button className='px-3 py-2'>useReducer</Button>
        </Link>
      </div>

      <div className='text-center my-3'>
        <Link to={'/useeffect-none'} className='mx-2'>
          <Button className='px-3 py-2'>useEfect-None-Dependencies</Button>
        </Link>
        <Link to={'/useeffect-empty'} className='mx-2'>
          <Button className='px-3 py-2'>useEfect-Dependencies-Empty</Button>
        </Link>
        <Link to={'/useeffect'} className='mx-2'>
          <Button className='px-3 py-2'>useEfect-Dependencies</Button>
        </Link>
      </div>

      <div className='text-center my-3'>
        <Link to={'/login'} className='mx-2'>
          <Button className='px-3 py-2'>Login</Button>
        </Link>
        <Link to={'/info'} className='mx-2'>
          <Button className='px-3 py-2'>Info</Button>
        </Link>
        <Link to={'/register'} className='mx-2'>
          <Button className='px-3 py-2'>Register</Button>
        </Link>
      </div>

      <div className='my-5'>
        {children}
      </div>
    </>
  );
}
export default LayoutMain;