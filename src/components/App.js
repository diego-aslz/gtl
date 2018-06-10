import React from 'react';
import TaskGroups from './TaskGroups';
import Tasks from './Tasks';
import tasksRepository from '../repositories/tasks-repository';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  groupSelected(group) {
    this.setState({ group });
  }

  render() {
    return (
      <div className="container grouped-task-list-app">
        <div className="row">
          <div className="col-md-6">
            <TaskGroups groups={tasksRepository.listGroups()} onGroupSelect={group => this.groupSelected(group)} />
          </div>
          <div className="col-md-6">
            <Tasks group={this.state.group} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
