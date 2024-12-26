function FuncObject02() {
  interface Obj {
    a: number;
    b: string;
    log(): void;
  }

  const ob: Obj = {
    a: 5,
    b: 'test',
    log() {
      console.log(`a: ${this.a}, b: ${this.b}`);
    },
  };

  ob.log();

  return (
    <>
      <h1 className="text-center">Example Function Component</h1>
    </>
  );
}

export default FuncObject02;