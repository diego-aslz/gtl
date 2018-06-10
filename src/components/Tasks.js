import React from 'react';

function Tasks(props) {
  if (!props.group) {
    return null;
  }

  const taskItems = props.group.tasks.map(task => (
    <li key={task.id} className="list-group-item task-item {task.completedAt ? 'locked' : null}">
      <b>{task.task}</b>
    </li>
  ));

  return (
    <div>
      <h2>{props.group.name}</h2>
      <br />
      <ul className="tasks-list list-group">{taskItems}</ul>
    </div>
  );
}

export default Tasks;
