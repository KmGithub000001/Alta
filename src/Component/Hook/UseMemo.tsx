import { useMemo, useState } from 'react';
import { Button } from 'antd';

interface MyProps {
  num: number;
}
function ChildComp({ num }: MyProps) {
  const doub = (numb) => {
    alert(num);
    return numb * 2;
  };
  //Khi render giá trị num không thay đổi thì hàm doub sẽ không được gọi
  const memoVal = useMemo(() => {
    return doub(num);
  }, [num]);

  return (
    <>
      <h1>{memoVal}</h1>
    </>
  );
}

function UseMemo() {
  const [val, setVal] = useState(0);
  const change = () => {
    setVal(Math.round(Math.random() * 5));
  };

  return (
    <div className='text-center'>
      <ChildComp num={val} />
      <Button onClick={change}>Change</Button>
    </div>
  );
}
export default UseMemo;