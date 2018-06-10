import React from 'react';
import TaskGroupItem from './TaskGroupItem';
import '../styles/TaskGroups.css';

function TaskGroups(props) {
  const groups = props.groups.map(group => (
    <TaskGroupItem key={group.name} group={group} onClick={props.onGroupSelect} />
  ));

  return (
    <div>
      <h2>Things to do</h2>
      <br />
      <ul className="task-groups list-group">{groups}</ul>
    </div>
  );
}

export default TaskGroups;
