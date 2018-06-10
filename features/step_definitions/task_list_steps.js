/* eslint-disable new-cap,func-names,prefer-arrow-callback */

import { Given, When, Then, Before } from 'cucumber';
import tasksRepository from '../../src/repositories/tasks-repository';
import App from '../../src/components/App';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

let app;

Before(function() {
  tasksRepository.clear();
});

Given('I have the following tasks:', function (dataTable) {
  tasksRepository.addTasks(dataTable.hashes().map(task => ({
    ...task,
    completedAt: (task.completedAt === '' ? null : new Date(task.completedAt)),
  })));
});

When('I visit Grouped Task List system', function () {
  app = mount(<App />);
});

When('I expand group {string}', function (name) {
  findItem('.groups-list', name).simulate('click');
});

When('I mark task {string} as completed/incomplete', function (name) {
  findItem('.tasks-list', name).simulate('click');
});

Then('I should see the following groups:', function (dataTable) {
  const actual = app.find('.groups-list li a').map(el => ({
    group: el.children().first().text(),
    subtitle: el.children().last().text(),
  }));
  expect(actual).to.be.eql(dataTable.hashes());
});

Then('I should see the following tasks:', function (dataTable) {
  function getStatus(el) {
    return ['completed'].find(status => el.hasClass(status)) || 'incomplete';
  }

  const actual = app.find('.task-item').map(el => ({
    task: el.text(),
    status: getStatus(el),
  }));

  expect(actual).to.be.eql(dataTable.hashes());
});

function findItem(listSelector, name) {
  return app.find(listSelector + ' li a').filterWhere(el => el.text().indexOf(name) > -1);
}
