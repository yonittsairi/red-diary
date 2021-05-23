import logo from './logo.svg';
import './App.css';
import RedApp from './views/RedApp';
import Messages from './views/Messages';
import { Route, Switch } from 'react-router';
import Header from './cmps/Header';
import LoginSignUp from './views/LoginSignUp';
import About from './views/About';

export function App() {
  return (
    <div className="App">
      <Header />
      <main>  <Switch>
        <Route component={LoginSignUp} path="/Login-signup" />
        <Route component={About} path="/About" />
        <Route component={Messages} path="/Messages" />
        <Route component={RedApp} path="/" />
      </Switch>
      </main>
    </div>
  );
}

export default App;
