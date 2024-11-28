import { useState } from "react";


const Counter = ({ id, count, setCounters, name }) => {

  // (current) => current + 1 (before)
  // (current) => modified version of the current array (now)

  function minusOne() {
    setCounters(
      (current) =>
        current.map(
          (item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
        )
    )
  }

  function plusOne() {
    setCounters((current) => {
      const arr = current.map((item) =>
        item.id === id ? { id: item.id, name: item.name, count: item.count + 1 } : { id: item.id, name: item.name, count: item.count }
      )

      console.log(arr)
      return arr
    })
  }

  return (
    <div>
      <h1>{name} {count}</h1>
      <div>
        <button onClick={minusOne}>-</button>
        <button onClick={plusOne}>+</button>
      </div>
    </div>
  )
}

const App = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      name: 'Pears',
      count: 0
    },
    {
      id: 2,
      name: 'Apples',
      count: 0
    },
    {
      id: 3,
      name: 'Bananas',
      count: 0
    },
    {
      id: 4,
      name: 'Berries',
      count: 5
    }
  ]);

  //array example

  // let arr = [{
  //   id: 1,
  //   count: 0
  // }, {
  //   id: 2,
  //   count: 0
  // }, {
  //   id: 3,
  //   count: 0
  // }, {
  //   id: 4,
  //   count: 0
  // }];

  // arr = arr.map((item) => item.id === 3 ? { id: item.id, count: item.count + 1 } : item);

  // console.log(arr)

  // obj example

  // let obj = {
  //   name: 'Jane',
  //   surname: 'Doe',
  //   house: "234 House St"
  // }

  // obj = {
  //   ...obj,
  //   name: 'John'
  // }

  // console.log(obj)


  function handleReport() {
    console.log(counters)
  }

  return <div>

    {
      counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          count={counter.count}
          setCounters={setCounters}
          name={counter.name}
        />
      ))
    }
    <button onClick={handleReport}>Click me for review!</button>
  </div>;
};

export default App;
