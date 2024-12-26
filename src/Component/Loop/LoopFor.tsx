function LoopFor() {

  const arr: [number, string] = [1, 'aaaa'];

  for ( let i = 0; i < arr.length; i++) {
    alert(arr[i]);
  }

  return (<>
    <h1 className="text-center">Example Function Component</h1>
  </>);
}

export default LoopFor;