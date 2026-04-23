<template>
  <section
    id="projects"
    class="projects-section"
    aria-labelledby="projects-title"
  >
    <article class="projects-section__slide">
      <div class="projects-section__copy">
        <span class="projects-section__tag">B2C</span>
        <h2 id="projects-title" class="projects-section__title">KOLOBOX</h2>
        <p class="projects-section__description">
          Социальный eco-food стартап для снижения пищевых отходов через покупку
          скидочных сюрприз-боксов.
        </p>
        <p class="projects-section__description">
          Проектировала дизайн пользовательских сценариев от онбординга до
          оплаты.
        </p>
      </div>

      <div class="projects-section__gallery-placeholder" aria-hidden="true">
        <PhoneFrame
          v-for="screen in galleryScreens"
          :key="screen.alt"
          class="projects-section__gallery-phone"
          width="280px"
          :src="screen.src"
          :alt="screen.alt"
        />
      </div>

      <div class="projects-section__footer">
        <BaseButtonLink class="projects-section__button" href="#resume">
          Открыть Figma
        </BaseButtonLink>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import BaseButtonLink from "@components/BaseButtonLink.vue";
import PhoneFrame from "@components/PhoneFrame.vue";

import checkoutScreen from "@assets/screens/kolobox/kolobox-checkout-screen.png";
import homeScreen from "@assets/screens/kolobox/kolobox-home-screen.png";
import yellowScreen from "@assets/phone-screen-yellow.svg";

const galleryScreens = [
  {
    src: homeScreen,
    alt: "Экран главной страницы KOLOBOX",
  },
  {
    src: yellowScreen,
    alt: "Желтый экран телефона",
  },
  {
    src: checkoutScreen,
    alt: "Экран оформления заказа KOLOBOX",
  },
];
</script>
