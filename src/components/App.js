import React from 'react';
import TaskGroups from './TaskGroups';
import tasksRepository from '../repositories/tasks-repository';

class App extends React.Component {
  render() {
    return (
      <div className="grouped-task-list-app">
        <TaskGroups groups={tasksRepository.listGroups()} />
      </div>
    );
  }
}

export default App;
