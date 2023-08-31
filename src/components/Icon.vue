<template>
  <component :is="component" />
</template>
<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";
const prop = defineProps<{
  name: string;
}>();

const component = computed(() =>
  defineAsyncComponent({
    loader: () => import(`./icons/${prop.name}.vue`),
  })
);
</script>
