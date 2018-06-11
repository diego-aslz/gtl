import React from 'react';
import GroupItem from './GroupItem';
import tasksRepository from '../repositories/tasks-repository';

function Groups() {
  const groups = tasksRepository.listGroups().map(group => (
    <GroupItem key={group.name} group={group} />
  ));

  return (
    <div>
      <h2>Things to do</h2>
      <br />
      <ul className="groups-list list-group">{groups}</ul>
    </div>
  );
}

export default Groups;
