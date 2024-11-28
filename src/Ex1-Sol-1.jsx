import { useState } from "react";


const Counter = ({ count, setCount }) => {

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount((current) => current - 1)}>-</button>
        <button onClick={() => setCount((current) => current + 1)}>+</button>
      </div>
    </div>
  )
}

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function handleReport() {
    console.log('pears:', count1, count2, count3)
  }

  return <div>
    <Counter count={count1} setCount={setCount1} />
    <Counter count={count2} setCount={setCount2} />
    <Counter count={count3} setCount={setCount3} />

    <button onClick={handleReport}>Click me for review!</button>
  </div>;
};

export default App;
