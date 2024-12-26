import { useReducer } from 'react';
import { Button } from 'antd';

function reducer(state, act) {
  switch (act.type) {
    case 'inc':
      return { val: state.val += act.num };
    case 'des':
      return { val: state.val -= act.num };
    default:
      alert('erro');
  }
  return { val: state.val };
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { val: 0 });
  return (
    <>
      <div className="text-center">
        <h1>{state.val}</h1>
        <Button onClick={() => dispatch({ type: 'des', num: 2 })} >-2</Button>
        <Button onClick={() => dispatch({ type: 'des', num: 1 })} >-1</Button>
        <Button onClick={() => dispatch({ type: 'inc', num: 1 })} >+1</Button>
        <Button onClick={() => dispatch({ type: 'inc', num: 2 })} >+2</Button>
      </div>
    </>
  );
}
export default UseReducer;