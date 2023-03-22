import logo from './logo.svg';
import './App.css';


function MyLoginButton()
{
  return (
    
    <button>
      lOGIN
    </button>
  )
}


function MyInputField()
{
  return (
    <label>
      Your email:
      <input name="inputmail"/>
    </label>
  )
}

function App() {
  return (
    <div className="App">
      <MyLoginButton/>
      
      <MyInputField/>
    </div>
  );
}

export default App;
