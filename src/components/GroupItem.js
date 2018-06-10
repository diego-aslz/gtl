import React from 'react';

class GroupItem extends React.Component {
  onClick(ev) {
    ev.preventDefault();
    this.props.onClick(this.props.group);
  }

  countCompleted(tasks) {
    return tasks.reduce((acc, t) => acc + (t.completedAt ? 1 : 0), 0);
  }

  render() {
    const { group } = this.props;

    return (
      <li className="list-group-item">
        <a href="#" onClick={(ev) => this.onClick(ev)}>
          <b>{group.name}</b>
          <br/>
          <span className="text-muted text-uppercase">
            {this.countCompleted(group.tasks)} of {group.tasks.length} tasks completed
          </span>
        </a>
      </li>
    );
  }
}

export default GroupItem;
