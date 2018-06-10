/* eslint-disable new-cap,func-names,prefer-arrow-callback */

import { Given, When, Then } from 'cucumber';
import tasksRepository from '../../src/repositories/tasks-repository';
import App from '../../src/components/App';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

let app;

Given('I have the following tasks:', function (dataTable) {
  tasksRepository.addTasks(dataTable.hashes());
});

When('I visit Grouped Task List system', function () {
  app = mount(<App />);
});

When('I expand group {string}', function (name) {
  app.find('.task-groups li a').filterWhere(el => el.type() && el.text().indexOf(name) > -1).simulate('click');
});

Then('I should see the following groups:', function (dataTable) {
  const actual = app.find('.task-groups').children().map(el => el.text());
  const expected = dataTable.rows().map(row => row[0]);
  expect(actual).to.be.eql(expected);
});

Then('I should see the following tasks:', function (dataTable) {
  const actual = app.find('.task-item').map(el => el.text());
  const expected = dataTable.rows().map(row => row[0]);
  expect(actual).to.be.eql(expected);
});
