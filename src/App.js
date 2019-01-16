import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header'
import Posts from './components/Posts';

library.add(faSearch, faChevronUp, faChevronDown);

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Sidebar />
            <main className="app-container">
              <Header />
              <section>
                <Posts />
              </section>
            </main>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
