<template>
  <div class="flex justify-between items-center">
    <h1 class="font-semibold text-gray-600 text-lg">{{ title }}</h1>
    <AddButton :label="btnLabel" @click="$emit('clicked')" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  btnLabel: string;
}>();

defineEmits<{
  (e: "clicked"): void;
}>();
</script>
