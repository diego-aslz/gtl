// In-memory tasks, enough for the example at hand.
let allTasks = [];

const tasksRepository = {
  clear() {
    allTasks = [];
  },

  addTasks(tasks) {
    allTasks = allTasks.concat(tasks);
  },

  listTasks() {
    // Mapping to make sure we create new objects and simulate a real repository.
    return allTasks.map(task => ({ ...task }));
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
  },

  completeTask(id) {
    const task = allTasks.find(t => t.id === id);
    if (task) {
      task.completedAt = new Date();
    }
  }
};

export default tasksRepository;
