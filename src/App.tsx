import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContent from 'src/components/MainContent';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContent} />
    </Switch>
  );
};

export default App;
