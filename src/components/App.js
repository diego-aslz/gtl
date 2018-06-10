import React from 'react';
import TaskGroups from './TaskGroups';
import tasksRepository from '../repositories/tasks-repository';

class App extends React.Component {
  render() {
    return (
      <div className="container grouped-task-list-app">
        <div className="row">
          <div className="col-md-6">
            <h2>Things to do</h2>
            <br/>
            <TaskGroups groups={tasksRepository.listGroups()} />
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
