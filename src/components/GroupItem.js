import React from 'react';

class GroupItem extends React.Component {
  onClick(ev) {
    ev.preventDefault();
    this.props.onClick(this.props.group);
  }

  render() {
    return (
      <li className="list-group-item">
        <a href="#" onClick={(ev) => this.onClick(ev)}>
          <b>{this.props.group.name}</b>
          <br/>
          <span className="text-muted text-uppercase">
            0 of {this.props.group.tasks.length} tasks completed
          </span>
        </a>
      </li>
    );
  }
}

export default GroupItem;
