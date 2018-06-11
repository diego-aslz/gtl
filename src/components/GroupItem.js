import React from 'react';
import { Link } from 'react-router-dom';

class GroupItem extends React.Component {
  countCompleted(tasks) {
    return tasks.reduce((acc, t) => acc + (t.completedAt ? 1 : 0), 0);
  }

  render() {
    const { group } = this.props;

    return (
      <li className="list-group-item">
        <Link to={`/groups/${group.name}`}>
          <b>{group.name}</b>
          <br/>
          <span className="text-muted text-uppercase">
            {this.countCompleted(group.tasks)} of {group.tasks.length} tasks completed
          </span>
        </Link>
      </li>
    );
  }
}

export default GroupItem;
