import React from 'react';

class TaskGroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggle(ev) {
    ev.preventDefault();
    this.setState({ expanded: !this.state.expanded });
  }

  renderTasks(tasks) {
    const taskItems = tasks.map(task => <li key={task.id} className="task-item">{task.task}</li>);
    return <ul>{taskItems}</ul>;
  }

  render() {
    return (
      <li className="list-group-item">
        <a href="#" onClick={(ev) => this.toggle(ev)}>
          <b>{this.props.group.name}</b>
          <br/>
          <span className="text-muted text-uppercase">
            0 of {this.props.group.tasks.length} tasks completed
          </span>
        </a>

        {this.state.expanded && this.renderTasks(this.props.group.tasks)}
      </li>
    );
  }
}

export default TaskGroupItem;
