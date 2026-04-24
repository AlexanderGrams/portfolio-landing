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

      <div
        ref="galleryRef"
        class="projects-section__gallery-placeholder"
        aria-hidden="true"
      >
          <PhoneFrame
            v-for="(screen, index) in galleryScreens"
            :key="screen.alt"
            class="projects-section__gallery-phone"
            :class="`projects-section__gallery-phone--${screenPositions[index]}`"
            width="280px"
            :src="screen.src"
            :alt="screen.alt"
          >
            <div
              v-if="screenPositions[index] === 'center'"
              class="projects-section__phone-logo-animation"
            >
              <KoloboxLogoAnimation />
            </div>
          </PhoneFrame>
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
import { onBeforeUnmount, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BaseButtonLink from "@components/BaseButtonLink.vue";
import KoloboxLogoAnimation from "@components/KoloboxLogoAnimation.vue";
import PhoneFrame from "@components/PhoneFrame.vue";

import checkoutScreen from "@assets/screens/kolobox/kolobox-checkout-screen.png";
import homeScreen from "@assets/screens/kolobox/kolobox-home-screen.png";
import splashScreen from "@assets/screens/kolobox/kolobox-splash-screen.png";

const galleryRef = ref<HTMLElement | null>(null);
const screenPositions = ["left", "center", "right"] as const;
let galleryAnimationContext: gsap.Context | null = null;
let galleryScrollTrigger: ScrollTrigger | null = null;

const galleryScreens = [
  {
    src: homeScreen,
    alt: "Экран главной страницы KOLOBOX",
  },
  {
    src: splashScreen,
    alt: "Экран заставки KOLOBOX",
  },
  {
    src: checkoutScreen,
    alt: "Экран оформления заказа KOLOBOX",
  },
];

onMounted(() => {
  if (!galleryRef.value) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  galleryAnimationContext = gsap.context(() => {
    const leftPhone = galleryRef.value?.querySelector(
      ".projects-section__gallery-phone--left",
    );
    const rightPhone = galleryRef.value?.querySelector(
      ".projects-section__gallery-phone--right",
    );

    if (!leftPhone || !rightPhone) {
      return;
    }

    gsap.set(leftPhone, {
      x: 212,
      y: 22,
    });

    gsap.set(rightPhone, {
      x: -212,
      y: 22,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.value,
        start: "top 78%",
        end: "top 40%",
        scrub: 0,
        onLeave: (self) => {
          gsap.set(leftPhone, {
            x: -32,
            y: 0,
          });

          gsap.set(rightPhone, {
            x: 32,
            y: 0,
          });

          self.kill(false);
          galleryScrollTrigger = null;
        },
      },
    });

    galleryScrollTrigger = timeline.scrollTrigger ?? null;

    timeline
      .to(
        leftPhone,
        {
          x: -32,
          y: 0,
          ease: "none",
        },
        0,
      )
      .to(
        rightPhone,
        {
          x: 32,
          y: 0,
          ease: "none",
        },
        0,
      );
  }, galleryRef);

  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  galleryScrollTrigger?.kill();
  galleryScrollTrigger = null;
  galleryAnimationContext?.revert();
  galleryAnimationContext = null;
});
</script>
