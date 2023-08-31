<template>
  <div
    class="p-1 bg-[#F4F6F9] border rounded-2xl flex justify-center items-center w-[352px] h-[37px]"
  >
    <button
      v-for="item in props.items"
      :key="item.id"
      class="px-3 text-center flex items-center justify-center w-full h-full"
      :class="getDynamicClasses(item)"
      :disabled="isActiveItem(item)"
      @click="$emit('change', item.id)"
    >
      <span :class="getDynamicTextClasses(item)">{{ item.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
export type GroupedButtonItem = {
  id: number;
  label: string;
};

type Props = {
  items: GroupedButtonItem[];
  activeItemId: number;
};

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});

type Emits = {
  (e: "change", id: number): void;
};

defineEmits<Emits>();

function isActiveItem(item: GroupedButtonItem) {
  return item.id === props.activeItemId;
}

function getDynamicClasses(item: GroupedButtonItem) {
  if (isActiveItem(item)) {
    return "bg-[#FFFFFF] text-#09101D rounded-xl font-bold text-center  px-0.5 py-1";
  }

  return "bg-[#F4F6F9] font-medium text-#394452  px-0.5 py-1";
}

function getDynamicTextClasses(item: GroupedButtonItem) {
  if (isActiveItem(item)) {
    return "text-#09101D font-bold text-center text-xs";
  }

  return "font-medium text-#394452 text-xs";
}
</script>

<style scoped></style>
