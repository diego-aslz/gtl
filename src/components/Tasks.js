import React from 'react';
import tasksRepository from '../repositories/tasks-repository';

class Tasks extends React.Component {
  taskClicked(task) {
    if (task.completedAt) {
      tasksRepository.incompleteTask(task.id);
    } else {
      tasksRepository.completeTask(task.id);
    }
    this.props.taskChanged();
  }

  renderTasks(tasks) {
    return tasks.map(task => (
      <li key={task.id} className={this.taskItemClasses(task)}>
        <a onClick={() => this.taskClicked(task)}><b>{task.task}</b></a>
      </li>
    ));
  }

  taskItemClasses(task) {
    let classes = 'list-group-item task-item';

    if (task.completedAt) {
      classes += ' completed';
    }

    return classes;
  }

  render() {
    const { group } = this.props;

    if (!group) {
      return null;
    }

    return (
      <div>
        <h2>{group.name}</h2>
        <br />
        <ul className="tasks-list list-group">{this.renderTasks(group.tasks)}</ul>
      </div>
    );
  }
}

export default Tasks;
