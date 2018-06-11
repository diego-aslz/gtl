/* eslint-disable new-cap,func-names,prefer-arrow-callback */

import { Given, When, Then, Before } from 'cucumber';
import tasksRepository from '../../src/repositories/tasks-repository';
import App from '../../src/components/App';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { HashRouter as Router } from 'react-router-dom';
import setupDom from '../support/jsdom';

let app;

Before(function() {
  tasksRepository.clear();
  setupDom();
});

Given('I have the following tasks:', function (dataTable) {
  tasksRepository.addTasks(mapTasks(dataTable.hashes()));
});

When('I visit Grouped Task List system', function () {
  app = mount(<Router><App /></Router>);
});

When('I open group {string}', function (name) {
  findItem('.groups-list', name).simulate('click', { button: 0 });
});

When('I mark task {string} as completed/incomplete', function (name) {
  findItem('.tasks-list', name).simulate('click', { button: 0 });
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
    return ['locked', 'completed'].find(status => el.hasClass(status)) || 'incomplete';
  }

  const actual = app.find('.task-item').map(el => ({
    task: el.text(),
    status: getStatus(el),
  }));

  expect(actual).to.be.eql(dataTable.hashes());
});

Then('I should have the following tasks:', function (dataTable) {
  expect(tasksRepository.listTasks()).to.be.eql(mapTasks(dataTable.hashes()));
});

function mapTasks(rawTasks) {
  return rawTasks.map(task => ({
    ...task,
    completedAt: (task.completedAt === '' ? null : new Date(task.completedAt)),
    dependencyIds: (task.dependencyIds === '' ? [] : task.dependencyIds.split(',')),
  }));
}

function findItem(listSelector, name) {
  return app.find(listSelector + ' li a').filterWhere(el => el.text().indexOf(name) > -1);
}
