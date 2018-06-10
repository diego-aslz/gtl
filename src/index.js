import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import tasksRepository from './repositories/tasks-repository';
import sampleTasks from './repositories/sample-tasks';

// Static tasks for the exercise.
tasksRepository.addTasks(sampleTasks);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
