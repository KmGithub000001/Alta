import { Button } from 'antd';

interface MyProps {
  click(): void;
}

function ChilComp({ click }: MyProps) {
  return (
    <>
      <Button onClick={click}>BTN</Button>
    </>
  );
}

function PropsHam() {
  const click = () => {
    alert('Clicked!');
  };

  return (
    <>
      <ChilComp click={click} />
    </>
  );
}
export default PropsHam;