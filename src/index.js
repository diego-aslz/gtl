import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import tasksRepository from './repositories/tasks-repository';
import sampleTasks from './repositories/sample-tasks';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/app.css';

// Static tasks for the exercise.
tasksRepository.addTasks(sampleTasks);

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
