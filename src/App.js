import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

//COMPONENTS
import Header from './Header';
import WordList from './WordList';
import Add from './Add';

//CSS
import './App.css';

function App() {
   const history = useHistory();

  return (
     <AppDiv>
        <Container>
           <Header />
           <Switch>
              <Route path="/" exact component={WordList} />
              <Route path="/add/" component={Add} />
           </Switch>
        </Container>
     </AppDiv>
  );
}
const AppDiv = styled.div`
   padding: 0.5rem;
`;

const Container = styled.div`
   margin-top: 20px;
   padding: 0 10px;
`;


export default App;
