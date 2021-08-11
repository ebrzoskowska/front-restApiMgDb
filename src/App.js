import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { LandingPage } from './pages/landing';
import { HomePage } from './pages/home';
import { authUser } from './utils';


const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    authUser(setUser)
  }, [user]);

  return (
    <AppContainer>
      {user ? <Redirect to='/home'/> : <Redirect to='/'/>}
      <Route exact path='/'>
        <LandingPage user={user} setUser={setUser}/>
      </Route>
      <Route path='/home'>
        <HomePage setUser={setUser}/>
      </Route>
    </AppContainer>
  );
}

const AppContainer = styled(Router)`
  width: 100vw;
  height: 100vh;
`

export default App;
