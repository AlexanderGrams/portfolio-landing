<template>
  <figure class="phone-frame" :class="`phone-frame--${size}`">
    <div class="phone-frame__shell">
      <div class="phone-frame__screen">
        <img
          v-if="src"
          class="phone-frame__image"
          :src="src"
          :alt="alt"
          loading="lazy"
        />

        <div v-if="$slots.default" class="phone-frame__overlay">
          <slot />
        </div>
      </div>

      <div class="phone-frame__notch" aria-hidden="true"></div>
      <div class="phone-frame__home-indicator" aria-hidden="true"></div>
    </div>
  </figure>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    size?: "compact" | "default" | "large";
  }>(),
  {
    src: "",
    alt: "",
    size: "default",
  },
);
</script>
