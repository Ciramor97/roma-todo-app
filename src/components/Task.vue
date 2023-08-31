<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-3 justify-center items-center">
      <CustomCheckBox class="cursor-pointer" :label="taskLabel" />
      <Status :label="stateToLabel(status)" :status="status" />
    </div>
    <div class="flex space-x-3 items-center">
      <button @click="$emit('update')">
        <Icon name="Edit" />
      </button>
      <button @click="$emit('deleted')">
        <Icon name="Delete" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import CustomCheckBox from "./CustomCheckBox.vue";
import Status from "./Status.vue";
import { stateToLabel, TodoState } from "../helpers";

type Props = {
  taskLabel: string;
  status: TodoState;
};

withDefaults(defineProps<Props>(), {
  taskLabel: "",
});
</script>

<style scoped></style>
