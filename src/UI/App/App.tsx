import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from '../../Constants/Routes/Routes';
import { Layout } from '../Components/HOCS/Layout';
import { ContextWrapper } from '../../Context/ContextWrapper';

function App() {
  return (
    <Router>
      <Switch>
        <ContextWrapper>
          <Layout>
            {
              Routes.map((el, idx) => (
                <Route path={el.path} key={idx} exact>
                  {<el.page />}
                </Route>
              ))
            }
          </Layout>
        </ContextWrapper>
      </Switch>
    </Router>
  );
}

export default App;
