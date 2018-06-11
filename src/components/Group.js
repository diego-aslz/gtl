import React from 'react';
import tasksRepository from '../repositories/tasks-repository';
import { Link } from 'react-router-dom';

class Group extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props.match.params;
    this.state = {
      name,
      tasks: tasksRepository.listTasksByGroup(name),
    };
  }

  taskClicked(task) {
    if (tasksRepository.anyIncomplete(task.dependencyIds)) {
      return;
    }

    if (task.completedAt) {
      tasksRepository.incompleteTask(task.id);
    } else {
      tasksRepository.completeTask(task.id);
    }

    this.setState({
      tasks: tasksRepository.listTasksByGroup(this.state.name),
    });
  }

  renderTasks() {
    return this.state.tasks.map(task => (
      <li key={task.id} className={this.taskItemClasses(task)}>
        <a onClick={() => this.taskClicked(task)}><b>{task.task}</b></a>
      </li>
    ));
  }

  taskItemClasses(task) {
    let classes = 'list-group-item task-item';

    if (tasksRepository.anyIncomplete(task.dependencyIds)) {
      classes += ' locked';
    } else if (task.completedAt) {
      classes += ' completed';
    }

    return classes;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <h2>{this.state.name}</h2>
          </div>
          <div className="col-sm-6 text-right all-groups-link">
            <Link to="/">ALL GROUPS</Link>
          </div>
        </div>
        <br />
        <ul className="tasks-list list-group">{this.renderTasks()}</ul>
      </div>
    );
  }
}

export default Group;
