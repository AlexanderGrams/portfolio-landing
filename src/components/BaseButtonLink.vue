<template>
  <a
    class="base-button-link"
    :class="`base-button-link--${variant}`"
    :href="href"
    :target="target"
    :rel="rel"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    rel?: string;
    variant?: "light";
  }>(),
  {
    target: "_self",
    rel: undefined,
    variant: "light",
  },
);
</script>
