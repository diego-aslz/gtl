import React from 'react';
import Groups from './Groups';
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
            <Groups groups={tasksRepository.listGroups()} onGroupSelect={group => this.groupSelected(group)} />
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
