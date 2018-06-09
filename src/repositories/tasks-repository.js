// In-memory tasks, enough for the example at hand.
let allTasks = [];

const tasksRepository = {
  addTasks(tasks) {
    allTasks = allTasks.concat(tasks);
  },

  listTasks() {
    return allTasks.slice();
  },

  listGroupsWithTasksCount() {
    return this.listTasks().map(task => task.group).sort().reduce((groups, name) => {
      if (!groups[name]) {
        groups[name] = 0;
      }
      groups[name] += 1;
      return groups;
    }, {});
  }
};

export default tasksRepository;
