function FunctionArray02() {

  const arr: Array<number> = [1, 2, 3];

  return (<>
    <h1 className="text-center">Example Function Component</h1>
    {arr.map((e) => <h3>{e}</h3>)}
  </>);
}

export default FunctionArray02;