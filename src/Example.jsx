import { useState } from "react";


const ChangeMssgViaBtn = ({ message, changeMessage }) => {


  return (
    <>
      <h1>Component: {message}</h1>
      <button onClick={() => changeMessage('Bye')}>Change to bye</button>
    </>
  )
}



const App = () => {
  const [message, setMessage] = useState("Hello");

  return <div>
    <h1>App: {message}</h1>
    <ChangeMssgViaBtn message={message} changeMessage={setMessage} />
  </div>;
};

export default App;
