function FunctionArray03() {

  const arr: [number, string] = [1, 'aaaa'];

  return (<>
    <h1 className="text-center">Example Function Component</h1>
    {arr.map((e) => <h3>{e}</h3>)}
  </>);
}

export default FunctionArray03;