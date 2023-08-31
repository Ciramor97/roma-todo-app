<template>
  <div class="space-y-3 w-full mt-4">
    <BaseInput
      v-model="task"
      label="Nouvelle tache"
      required
      name="task"
      placeholder="Insérez ici votre tache"
    />
    <AddButton
      :disabled="disabled"
      label="Ajouter"
      @click="$emit('completed', mode, task)"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ITask } from "../interfaces";

const task = ref("");

type Prop = {
  mode: "create" | "update";
  taskToEdit: ITask | null;
};
const props = withDefaults(defineProps<Prop>(), {
  mode: "create",
});

const disabled = computed(() => {
  if (task.value === "") return true;
});

onMounted(() => {
  console.log("value get by props", props.taskToEdit);
  if (props.mode == "update" && props.taskToEdit) {
    task.value = props.taskToEdit.task;
  }
});
</script>
