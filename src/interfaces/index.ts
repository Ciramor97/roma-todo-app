import { TodoState } from "../helpers";

export interface ITask {
  id: number;
  task: string;
  state: TodoState;
}
