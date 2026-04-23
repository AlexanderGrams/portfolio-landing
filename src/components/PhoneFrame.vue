<template>
  <figure class="phone-frame" :style="styleVars">
    <div class="phone-frame__shell">
      <div class="phone-frame__bezel">
        <div class="phone-frame__screen">
          <div class="phone-frame__status-bar" aria-hidden="true">
            <img
              class="phone-frame__status-time"
              :src="timeIcon"
              alt=""
              loading="eager"
            />

            <div class="phone-frame__status-icons">
              <img
                class="phone-frame__status-icon phone-frame__status-icon--cellular"
                :src="cellularIcon"
                alt=""
                loading="eager"
              />
              <img
                class="phone-frame__status-icon phone-frame__status-icon--wifi"
                :src="wifiIcon"
                alt=""
                loading="eager"
              />
              <img
                class="phone-frame__status-icon phone-frame__status-icon--battery"
                :src="batteryIcon"
                alt=""
                loading="eager"
              />
            </div>
          </div>

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
      </div>

      <div class="phone-frame__notch" aria-hidden="true"></div>
      <div class="phone-frame__home-indicator" aria-hidden="true"></div>
    </div>
  </figure>
</template>

<script setup lang="ts">
import { computed } from "vue";

import batteryIcon from "@assets/icons/mobile_layer/status-bar-battery.svg";
import cellularIcon from "@assets/icons/mobile_layer/status-bar-cellular.svg";
import timeIcon from "@assets/icons/mobile_layer/status-bar-time.svg";
import wifiIcon from "@assets/icons/mobile_layer/status-bar-wifi.svg";

const PHONE_BASE_WIDTH = 424;

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    width?: number | string;
  }>(),
  {
    src: "",
    alt: "",
    width: PHONE_BASE_WIDTH,
  },
);

const parsedWidth = computed(() => {
  const value = props.width ?? PHONE_BASE_WIDTH;

  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim();
    const match = normalized.match(/^(-?\d*\.?\d+)(px)?$/);

    if (match) {
      return Number(match[1]);
    }
  }

  return PHONE_BASE_WIDTH;
});

const styleVars = computed(() => ({
  "--phone-width": `${parsedWidth.value}px`,
  "--phone-scale": `${parsedWidth.value / PHONE_BASE_WIDTH}`,
}));
</script>
