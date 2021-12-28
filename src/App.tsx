import './App.css';
import Companies from './components/Companies';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Companies />
    </div>
  );
}

export default App;
