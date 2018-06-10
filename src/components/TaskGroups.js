import React from 'react';
import TaskGroupItem from './TaskGroupItem';

function TaskGroups(props) {
  const groups = props.groups.map(group => (
    <TaskGroupItem key={group.name} group={group} />
  ));

  return (
    <ul className="task-groups">{groups}</ul>
  );
}

export default TaskGroups;
