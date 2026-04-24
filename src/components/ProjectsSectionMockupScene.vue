<template>
  <div ref="sceneRef" class="projects-section-mockup-scene" aria-hidden="true">
    <PhoneFrame
      v-for="(screen, index) in galleryScreens"
      :key="screen.alt"
      class="projects-section-mockup-scene__phone"
      :class="`projects-section-mockup-scene__phone--${screenPositions[index]}`"
      width="280px"
      :src="screen.src"
      :alt="screen.alt"
    >
      <div
        v-if="screenPositions[index] === 'center'"
        class="projects-section-mockup-scene__logo-animation"
      >
        <KoloboxLogoAnimation />
      </div>
    </PhoneFrame>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import KoloboxLogoAnimation from "@components/KoloboxLogoAnimation.vue";
import PhoneFrame from "@components/PhoneFrame.vue";

import checkoutScreen from "@assets/screens/kolobox/kolobox-checkout-screen.png";
import homeScreen from "@assets/screens/kolobox/kolobox-home-screen.png";
import splashScreen from "@assets/screens/kolobox/kolobox-splash-screen.png";

const sceneRef = ref<HTMLElement | null>(null);
const screenPositions = ["left", "center", "right"] as const;
let sceneAnimationContext: gsap.Context | null = null;
let sceneScrollTrigger: ScrollTrigger | null = null;

const galleryScreens = [
  {
    src: homeScreen,
    alt: "KOLOBOX home screen",
  },
  {
    src: splashScreen,
    alt: "KOLOBOX splash screen",
  },
  {
    src: checkoutScreen,
    alt: "KOLOBOX checkout screen",
  },
];

onMounted(() => {
  if (!sceneRef.value) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  sceneAnimationContext = gsap.context(() => {
    const leftPhone = sceneRef.value?.querySelector(
      ".projects-section-mockup-scene__phone--left",
    );
    const rightPhone = sceneRef.value?.querySelector(
      ".projects-section-mockup-scene__phone--right",
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
        trigger: sceneRef.value,
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
          sceneScrollTrigger = null;
        },
      },
    });

    sceneScrollTrigger = timeline.scrollTrigger ?? null;

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
  }, sceneRef);

  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  sceneScrollTrigger?.kill();
  sceneScrollTrigger = null;
  sceneAnimationContext?.revert();
  sceneAnimationContext = null;
});
</script>
