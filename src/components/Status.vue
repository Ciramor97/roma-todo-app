<template>
  <div
    class="flex justify-center items-center space-x-[0.313rem] py-1 px-2"
    :class="colorMapping.bgColor + borderStr"
  >
    <span class="w-1 h-1 rounded" :class="colorMapping.bgDotColor"></span>
    <span
      class="text-xs leading-[0.938rem] font-semibold"
      :class="colorMapping.textColor"
    >
      {{ label }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";
import { TodoState } from "../helpers";

interface StatusColors {
  textColor: string;
  bgColor: string;
  bgDotColor: string;
}
type ColorMappingObj = Record<TodoState, StatusColors>;

const COLOR_MAPPING_OBJECT: ColorMappingObj = {
  [TodoState.CREATED]: {
    bgColor: "bg-createdStatusBg",
    textColor: "text-createdStatusColor",
    bgDotColor: "bg-createdStatusColor",
  },
  [TodoState.DOING]: {
    bgColor: "bg-doingStatusBg",
    textColor: "text-doingStatusColor",
    bgDotColor: "bg-doingStatusColor",
  },
  [TodoState.DONE]: {
    bgColor: "bg-doneStatusBg",
    textColor: "text-doneStatusColor",
    bgDotColor: "bg-doneStatusColor",
  },
};

export default defineComponent({
  name: "StatusChip",
  props: {
    status: { type: String as PropType<TodoState>, required: true },
    label: {
      type: String,
      required: true,
    },
    chipType: {
      type: String as PropType<"CIRCULAR" | "ROUNDED">,
      default: "CIRCULAR",
    },
  },
  setup(props) {
    const colorMapping = computed(
      (): StatusColors => COLOR_MAPPING_OBJECT[props.status]
    );

    const borderStr = computed(
      (): string =>
        ` ${
          props.chipType === "ROUNDED"
            ? "rounded roundChipBorderStyle"
            : "rounded-[40px]"
        } ${colorMapping.value.textColor}`
    );

    return {
      colorMapping,
      borderStr,
    };
  },
});
</script>
