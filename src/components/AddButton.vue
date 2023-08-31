<template>
  <button
    class="rounded-md font-bold text-sm leading-5 px-4 select-none cursor-pointer bg-success"
    :class="dynamicClasses"
    :disabled="disabled"
  >
    <div v-if="loading" class="flex justify-center align-middle py-[15px]">
      <span class="loader"></span>
    </div>

    <slot v-else-if="hasContentSlot()" name="content"> </slot>
    <div
      v-else
      class="flex py-[14px] px-[10px] justify-center items-center space-x-2"
    >
      <span v-if="hasIconSlot()">
        <slot name="icon"> </slot>
      </span>
      <span :class="labelClass">{{ labelComputed }}</span>
      <span v-if="hasIconBack()" class="ml-2">
        <slot name="backIcon"></slot>
      </span>
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "VButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    labelColor: {
      type: String,
      default: "white",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    buttonHeight: {
      type: Number,
      default: 42,
    },
    customBgColor: {
      type: String,
      default: "success",
    },
    isBorderLined: {
      type: Boolean,
      default: false,
    },
    labelSize: {
      type: String,
    },
  },
  setup(props, { slots }) {
    const hasContentSlot = ref(() => slots.content !== undefined);
    const hasIconSlot = ref(() => slots.icon !== undefined);
    const hasIconBack = ref(() => slots.backIcon !== undefined);

    const dynamicClasses = computed((): string => {
      if (props.isBorderLined) return `border border-[#7d8b94]`;

      const colorToUse = props.customBgColor || "secondary";

      // Instead of hardcoding the color, we should use disabledButton
      return `bg-${props.disabled ? "[#DADEE3]" : colorToUse}`;
    });

    const labelClass = computed((): string => {
      // return "text-white";
      return `text-${props.labelColor}`;
    });
    const labelComputed = computed((): string => props.label || "");

    // function handleClick(event: Event) {
    //   if (props.disabled) event.stopPropagation();
    // }

    return {
      hasIconSlot,
      hasContentSlot,
      dynamicClasses,
      labelClass,
      hasIconBack,
      labelComputed,
      // onClick,
    };
  },
});
</script>

<style>
.green {
  background-color: #51aa1c;
  color: white;
}

.white {
  background-color: white;
  color: #09101d;
}

.grey {
  background-color: #ebecee;
  color: #a5abb3;
}

.red {
  background-color: #da1414;
  color: white;
}

.backIconPadding {
  display: flex;
  justify-content: center;
  margin: 7px 0 0 8px;
}
</style>
