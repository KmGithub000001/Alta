function LoopWhile() {

  const arr: [number, string] = [1, 'aaaa'];
  let i = 0;

  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }


  return (<>
    <h1 className="text-center">Example Function Component</h1>
  </>);
}

export default LoopWhile;