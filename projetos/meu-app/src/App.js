import logo from './logo.svg';
import './App.css';
import Letreiro from './Letreiro';
import Relogio from './Relogio';
// import Exemplos from './Exemplos';
// import Profile from './Profile';
import  {Contador}  from './Contador';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Letreiro />
    <Relogio />
    {/* <Exemplos /> */}
    {/* <Profile /> */}
    <Contador />
    </>
  );
}

export default App;
