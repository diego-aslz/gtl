import React from 'react';
import TaskGroupItem from './TaskGroupItem';
import '../styles/TaskGroups.css';

function TaskGroups(props) {
  const groups = props.groups.map(group => (
    <TaskGroupItem key={group.name} group={group} />
  ));

  return (
    <ul className="task-groups list-group">{groups}</ul>
  );
}

export default TaskGroups;
