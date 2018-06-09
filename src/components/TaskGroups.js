import React, { Component } from 'react';
import tasksRepository from '../repositories/tasks-repository';

class TaskGroups extends Component {
  renderGroups(groupsWithTasksCount) {
    return Object.keys(groupsWithTasksCount).map(name => (
      <li key={name}>{name} ({groupsWithTasksCount[name]})</li>
    ));
  }

  render() {
    const groupsWithTasksCount = tasksRepository.listGroupsWithTasksCount();
    return (
      <ul className="task-groups">{this.renderGroups(groupsWithTasksCount)}</ul>
    );
  }
}

export default TaskGroups;
