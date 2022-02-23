import logo from './logo.svg';
import './App.css';

function App() {
  const req = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={req}
        >
          fetch
        </button>
      </header>
    </div>
  );
}

export default App;
