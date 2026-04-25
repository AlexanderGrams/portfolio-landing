<template>
  <div class="result-metric">
    <div class="result-metric__copy">
      <div class="result-metric__badge">
        <strong class="result-metric__value">{{ value }}</strong>
        <span class="result-metric__label">{{ label }}</span>
      </div>

      <p class="result-metric__description">{{ description }}</p>

      <ul class="result-metric__list">
        <li v-for="item in items" :key="item" class="result-metric__item">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="result-metric__mockups" aria-hidden="true">
      <PhoneFrame
        v-for="screen in screens"
        :key="screen.alt"
        class="result-metric__phone"
        width="264px"
        :src="screen.src"
        :alt="screen.alt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PhoneFrame from "@components/PhoneFrame.vue";

defineProps<{
  value: string;
  label: string;
  description: string;
  items: string[];
  screens: {
    src: string;
    alt: string;
  }[];
}>();
</script>
