<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
  >
    <path
      :fill="color"
      d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "MaterialSymbolsLogout",
});

const { color, size } = defineProps({
  color: {
    type: String,
    default: "currentColor",
  },
  size: {
    type: [String, Number],
    default: 24,
  },
});
</script>
