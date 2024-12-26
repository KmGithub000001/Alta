import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='text-center'>
      <h1 className='text-center'>Home</h1>
      <Link to={'/page'} >Page</Link>
    </div>
  );
}
export default Home;