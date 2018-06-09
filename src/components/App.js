import React from 'react';
import TaskGroups from './TaskGroups';

class App extends React.Component {
  render() {
    return (
      <div className="grouped-task-list-app">
        <TaskGroups />
      </div>
    );
  }
}

export default App;
