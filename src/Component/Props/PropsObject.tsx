interface MyPropsItem {
  con1: string;
  con2: string;
}
interface MyProps {
  content: MyPropsItem;
}

function ChilComp({ content }: MyProps) {

  return (
    <>
      <h1 className='text-center'>{content.con1}</h1>
      <h1 className='text-center'>{content.con2}</h1>
    </>
  );
}

function PropsObject() {
  const content = {
    con1: 'Example Function Component',
    con2: 'Truyen Object',
  };

  return (
    <>
      <ChilComp content={content} />
    </>
  );
}
export default PropsObject;