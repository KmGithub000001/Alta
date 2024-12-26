import { useParams } from 'react-router-dom';

function UseParam() {
  const { id } = useParams();
  return (
    <h1 className="text-center">id: {id}</h1>
  );
}
export default UseParam;