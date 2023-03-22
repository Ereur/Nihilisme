import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function MyLoginButton()
{
  return (
    <div>
      <button>
        lOGIN
      </button>
    </div>
  )
}
// function Handleclick()
// {
//   const [type,Setatus] = useState("text")
//   Setatus(type === "password" ? "text" : "password");
// }


function MyInputField()
{
  // const [type,Setatus] = useState("text")
  // useEffect(() => {
  //   type = "text" ? "Password": "text"
  // }, [type]);
  const [type, setType] = useState("password");

  function handleButtonClick() {
    setType(type === "password" ? "text" : "password");
  }

  return (
    <div>
      <label>
        Your email:
        <input name="inputmail"/>
      </label>
      <div>
        <label>
          Your password:
          <input name="inputmail" type={type}/>
          <button onClick={handleButtonClick}> bi9</button>
        </label>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      
      <MyInputField/>
      <MyLoginButton/>
    </div>
  );
}

export default App;
