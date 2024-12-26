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

ChilComp.defaultProps = {
  content: 'Example Function Component',
};

function PropsMacDinh() {
  return (
    <>
      <ChilComp />
    </>
  );
}
export default PropsMacDinh;