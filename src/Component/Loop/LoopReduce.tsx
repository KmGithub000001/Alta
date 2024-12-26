function LoopReduce() {

  const arr: [number, string] = [1, 'aaaa'];

  arr.reduce((rs, e) => {
    console.log(e);
    return 0;
  }, 0);

  return (<>
    <h1 className="text-center">Example Function Component</h1>
  </>);
}

export default LoopReduce;