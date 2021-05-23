import logo from './logo.svg';
import './App.css';
import RedApp from './views/RedApp';
import Messages from './views/Messages';
import { Route, Switch } from 'react-router';
import Header from './cmps/Header';
import LoginSignUp from './views/LoginSignUp';
import About from './views/About';
import { useEffect, useState } from 'react';
import { Chat } from './cmps/Chat';
import { loadPosts } from './store/action/postActions';
import Diary from './views/Diary';

export function App() {
  const [state, setstate] = useState({ chatOpen: false })
  const openChat = () => {
    setstate({ ...state, chatOpen: !state.chatOpen })
  }
  useEffect(() => {
    loadPosts('')
    return () => {

    }
  }, [])
  return (
    <div className="">
      <Header openChat={openChat} />
      <main>
        <Switch>
          <Route component={LoginSignUp} path="/Login-signup" />
          <Route component={About} path="/About" />
          <Route component={Messages} path="/Messages" />
          <Route component={RedApp} path="/Diary" />
          <Route component={Diary} path="/" />
        </Switch>
      </main>
      {state.chatOpen && <Chat openChat={openChat} />}

    </div>
  );
}

export default App;
