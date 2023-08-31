import { defineStore } from "pinia";
import allTodos from "../datas/todo.json";
import { ITask } from "../interfaces/index";
import { TodoState } from "../helpers";

export const useTodosStore = defineStore("todo-store", {
  state: () => ({
    tasks: allTodos as ITask[],
  }),
  getters: {
    getAllTasks: (state) => {
      return state.tasks;
    },
  },
  actions: {
    create(data: ITask) {
      this.tasks.push(data);
    },
    filterByState(taskState: TodoState) {
      return this.tasks.filter((task) => taskState === task.state);
    },
    findOne(taskId: number) {
      return this.tasks.find((task: ITask) => task.id === taskId)!;
    },
    delete(taskId: number) {
      this.tasks.splice(taskId - 1, 1);
      return this.tasks;
    },
    fetchAll() {
      return this.tasks;
    },
  },
});

// export default useTodosStore;
