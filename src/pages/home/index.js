import React from 'react';
import { PageContainer } from '../../styledComponents';

export const HomePage = ({setUser}) => {

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("MyToken");
    setUser();
  }
  return(
    <PageContainer>
      <h1>We have success</h1>
      <button onClick={logoutHandler}>Log Out</button>
    </PageContainer>
  )
}