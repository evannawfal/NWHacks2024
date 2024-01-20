import logo from './logo.svg';
import './App.css';
import Header from './Header'; // Assuming Header is the component for your site header
import { Switch, Route } from 'react-router-dom';
import Login from './Login'; // Assuming Login and Events are components for your routes
import Events from './Events';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/events" component={Events} />
        </Switch>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;