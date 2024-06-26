<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
  >
    <path
      :fill="color"
      d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "Login",
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
