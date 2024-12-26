interface MyProps {
  content: string;
}

function ChilComp({ content }: MyProps) {
  return (
    <>
      <h1 className='text-center'>{content}</h1>
    </>
  );
}

function PropsTrucTiep() {
  const content = 'Example Function Component';
  return (
    <>
      <ChilComp content={content} />
    </>
  );
}
export default PropsTrucTiep;