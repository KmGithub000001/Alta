function FuncObject01() {

  const ob = {
    a: 5,
    b: 'test',
    log: function () {
      alert(`a: ${this.a}, b: ${this.b}`);
    },
  };

  ob.log();

  return (
    <>
      <h1 className="text-center">Example Function Component</h1>
    </>
  );
}

export default FuncObject01;