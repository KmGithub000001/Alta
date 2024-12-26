function LoopForEach() {

  const arr: [number, string] = [1, 'aaaa'];

  arr.forEach((e) => {
    alert(e);
  });

  return (<>
    <h1 className="text-center">Example Function Component</h1>
  </>);
}

export default LoopForEach;