import React from 'react';
import Groups from './Groups';
import Group from './Group';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container grouped-task-list-app">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Route exact path="/" component={Groups} />
          <Route path="/groups/:name" component={Group} />
        </div>
      </div>
    </div>
  );
}

export default App;
