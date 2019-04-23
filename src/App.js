import React, { Component, Fragment } from 'react';

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
          </Container>
          <Player />
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
