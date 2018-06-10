// In-memory tasks, enough for the example at hand.
let allTasks = [];

const tasksRepository = {
  addTasks(tasks) {
    allTasks = allTasks.concat(tasks);
  },

  listTasks() {
    return allTasks.slice();
  },

  listGroups() {
    const groups = [];
    this.listTasks().forEach(task => {
      const group = groups.find(g => g.name === task.group);
      if (group) {
        group.tasks.push(task);
      } else {
        groups.push({
          name: task.group,
          tasks: [task],
        });
      }
    });
    return groups.sort((g1, g2) => g1.name > g2.name);
  }
};

export default tasksRepository;
