<template>
  <label class="checkbox">
    <!-- {{ label }} -->
    <span class="ml-5 text-base" :class="{ 'line-through': checked }">{{
      label
    }}</span>
    <input type="checkbox" v-model="checked" />
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
defineProps<{
  label: string;
}>();
</script>
<style scoped>
.checkbox {
  display: block;
  position: relative;
  padding-left: 26px;
  /* margin-bottom: 18px; */
  font-size: 16px;
  /* user-select: none; */
  /* align-items: center;
  justify-content: center; */
}
.checkbox input {
  height: 0;
  width: 0;
}
/* yes */
.checkbox .checkmark:after {
  top: -5px;
  width: 5px;
  height: 10px;
  left: 2px;
  color: white;
}
/* yes */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid #c9c9c9;
}

/* yes */
.checkmark:after {
  content: "✓";
  position: absolute;
  display: none;
}
/* yes */
/* .checkbox:hover input ~ .checkmark {
  background-color: #c095c0;
} */
/* yes */
.checkbox input:checked ~ .checkmark {
  background-color: #1c09ac;
}

/* yes */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
</style>
