import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import Navbar from './components/Navbar'
import Main from './components/Main'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
`

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <StyledButton></StyledButton>
    </div> 
  )
}

export default App;
