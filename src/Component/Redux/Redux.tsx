import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store';
import { change } from './Content';
import { Button } from 'antd';

function Redux() {
  const content = useSelector((state: RootState) => state.content.val);

  const dispatch = useDispatch();

  const changeVal = (val) => {
    dispatch(change({ val: val }));
  };

  return (
    <div className='text-center'>
      <h1 className='text-center'>{content}</h1>
      <Button onClick={() => changeVal('001')} >Change value: 001</Button>
      <Button onClick={() => changeVal('005')} >Change value: 005</Button>
    </div>
  );
}
export default Redux;