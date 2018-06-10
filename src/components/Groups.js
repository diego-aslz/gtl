import React from 'react';
import GroupItem from './GroupItem';
import '../styles/Groups.css';

function Groups(props) {
  const groups = props.groups.map(group => (
    <GroupItem key={group.name} group={group} onClick={props.onGroupSelect} />
  ));

  return (
    <div>
      <h2>Things to do</h2>
      <br />
      <ul className="task-groups list-group">{groups}</ul>
    </div>
  );
}

export default Groups;
