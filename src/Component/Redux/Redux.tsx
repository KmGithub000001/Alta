import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Store';
import { change } from './Content';
import { Button } from 'antd';

function Redux() {
  const content = useSelector((state: RootState) => state.content.val);

  const dispatch = useDispatch();

  const changeCon = () => {
    dispatch(change({ val: 'changed!' }));
  };

  return (
    <div className='text-center'>
      <h1 className='text-center'>{content}</h1>
      <Button onClick={changeCon} >Change Content</Button>
    </div>
  );
}
export default Redux;