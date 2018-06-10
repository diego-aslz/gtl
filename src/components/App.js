import React from 'react';
import Groups from './Groups';
import Tasks from './Tasks';
import tasksRepository from '../repositories/tasks-repository';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: tasksRepository.listGroups(),
    };
  }

  groupSelected(group) {
    this.setState({ group });
  }

  taskChanged() {
    const groups = tasksRepository.listGroups();
    let group;

    if (this.state.group) {
      group = groups.find(g => g.name === this.state.group.name);
    }

    this.setState({
      groups,
      group,
    });
  }

  render() {
    return (
      <div className="container grouped-task-list-app">
        <div className="row">
          <div className="col-md-6">
            <Groups groups={this.state.groups} onGroupSelect={group => this.groupSelected(group)} />
          </div>
          <div className="col-md-6">
            <Tasks group={this.state.group} taskChanged={() => this.taskChanged()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
