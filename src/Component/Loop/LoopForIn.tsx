function LoopForIn() {

  const arr: [number, string] = [1, 'aaaa'];

  for ( const posi in arr) {
    alert(arr[posi]);
  }

  return (<>
    <h1 className="text-center">Example Function Component</h1>
  </>);
}

export default LoopForIn;