<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <div class="md:py-[100px] md:px-[200px] py-8 px-4 flex flex-col space-y-8">
      <Title
        btn-label="Add task"
        title="My tasks"
        @clicked="openAddTaskModal"
      ></Title>
      <SwitchBtn
        class="self-center"
        :items="grouppedBtnItems"
        :active-item-id="activeBtnId"
        @change="changeActiveBtn"
      />
      <div class="flex flex-col space-y-2" v-for="task in state.listOfTask">
        <Task
          :task-label="task.task ?? 'Alternative task'"
          :status="task.state"
          @deleted="onDeleteTask(task.id)"
          @update="onUpdateTask(task.id)"
        />
      </div>
    </div>
  </div>

  <Modal
    :title="modal.title"
    :show="modal.show"
    :bg-close="false"
    @close="modal.show = false"
  >
    <AddTask
      @completed="onTaskCompleted"
      :mode="state.mode"
      :task-to-edit="state.taskToEdit"
    />
  </Modal>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
import Task from "./components/Task.vue";
import AddTask from "./components/AddTask.vue";
import SwitchBtn, { type GroupedButtonItem } from "./components/SwitchBtn.vue";
import { ref, reactive, onMounted } from "vue";
import { TodoState } from "./helpers";
import { useTodosStore } from "./stores/todo";
import { ITask } from "./interfaces/index";
import Title from "./components/Title.vue";

const todoStore = useTodosStore();

const grouppedBtnItems: GroupedButtonItem[] = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Todo",
  },
  {
    id: 3,
    label: "Doing",
  },
  {
    id: 4,
    label: "Done",
  },
];

const modal = reactive({
  title: "Add task",
  show: false,
});

const activeBtnId = ref(grouppedBtnItems[0].id);

type State = {
  todoLength: number;
  todoState: TodoState;
  listOfTask: ITask[];
  mode: "create" | "update";
  taskToEdit: ITask | null;
  taskToEditId: number | null;
};

const state = reactive<State>({
  todoLength: 0,
  todoState: TodoState.CREATED,
  listOfTask: [],
  mode: "create",
  taskToEdit: null,
  taskToEditId: null,
});

function changeActiveBtn(btnId: number) {
  activeBtnId.value = btnId;
  if (activeBtnId.value === 1) {
    //todo
    state.listOfTask = todoStore.getAllTasks;
  } else if (activeBtnId.value === 2) {
    //todo
    state.listOfTask = todoStore.filterByState(TodoState.CREATED);
  } else if (activeBtnId.value === 3) {
    //doing
    state.listOfTask = todoStore.filterByState(TodoState.DOING);
  } else if (activeBtnId.value === 4) {
    //done
    state.listOfTask = todoStore.filterByState(TodoState.DONE);
  }
}

function openAddTaskModal() {
  modal.show = true;
  state.mode = "create";
}

function onTaskCompleted(mode: "create" | "update", task: string) {
  if (mode === "create") {
    var id = state.listOfTask.length + 1;
    todoStore.create({
      id,
      task: task,
      state: state.todoState,
    });
  } else {
    const idx = state.listOfTask.findIndex(
      (item) => item.id == state.taskToEdit?.id
    );
    state.listOfTask.splice(idx, 1, {
      id: state.taskToEdit!.id,
      task: task,
      state: TodoState.CREATED,
    });
  }
  modal.show = false;
  todoStore.fetchAll();
}

function onDeleteTask(id: number) {
  state.listOfTask = todoStore.delete(id);
}

function onUpdateTask(id: number) {
  state.taskToEdit = todoStore.findOne(id);
  state.mode = "update";
  modal.show = true;
}

onMounted(() => {
  todoStore.fetchAll();
  state.listOfTask = todoStore.tasks;
  state.todoLength = todoStore.tasks.length;
});
</script>

<style scoped></style>
