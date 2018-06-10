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
      <li>
        <a href="#" onClick={(ev) => this.toggle(ev)}>
          {this.props.group.name} ({this.props.group.tasks.length})
        </a>

        {this.state.expanded && this.renderTasks(this.props.group.tasks)}
      </li>
    );
  }
}

export default TaskGroupItem;
