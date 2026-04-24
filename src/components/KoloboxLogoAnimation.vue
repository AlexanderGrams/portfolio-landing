<template>
  <div class="kolobox-logo-animation" aria-hidden="true">
    <div class="kolobox-logo-animation__stack">
      <img
        class="kolobox-logo-animation__character"
        :src="characterIcon"
        alt=""
        loading="lazy"
      />
      <img
        class="kolobox-logo-animation__box"
        :src="boxIcon"
        alt=""
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import boxIcon from "@assets/icons/kolobox-logo-animation/kolobox-logo-box.svg";
import characterIcon from "@assets/icons/kolobox-logo-animation/kolobox-logo-character.svg";
</script>
