<template>
  <div class="flex flex-col space-y-2">
    <label
      class="text-left leading-[1.125rem] opacity-80 font-semibold"
      :for="name"
    >
      <span>{{ label }}</span
      >&thinsp;<span
        v-if="required"
        style="color: #da1414"
        class="text-left font-semibold opacity-80 text-xs leading-5"
        >*</span
      >
    </label>
    <div class="bg-white rounded-lg px-3 py-2 border border-[#858C94]">
      <input
        :id="name"
        :placeholder="placeholder"
        class="outline-none appearance-none flex-shrink w-full bg-transparent"
        :type="type"
        spellcheck="false"
        :value="modelValue"
        :disabled="disabled"
        @input="updateInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  placeholder?: string;
  name: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  modelValue: string | number;
}

withDefaults(defineProps<Props>(), {
  label: "",
  placeholder: "",
  required: false,
  type: "text",
  disabled: false,
  modelValue: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

function updateInput(event: Event) {
  emit("update:modelValue", (event.target as any).value);
}
</script>
