<template>
  <div class="projects-section-slider">
    <div class="projects-section-slider__focus">
      <div class="projects-section-slider__viewport" ref="emblaRef">
        <div class="projects-section-slider__container">
          <section class="projects-section-slider__slide">
            <div class="projects-section-slider__showcase">
              <ProjectsSectionMockupScene />
            </div>
          </section>

          <section class="projects-section-slider__slide">
            <div class="projects-section-slider__image-slide">
              <img
                class="projects-section-slider__image"
                :src="streetPosterSlide"
                alt="KOLOBOX street poster slide"
                loading="lazy"
              />
            </div>
          </section>

          <section class="projects-section-slider__slide">
            <div class="projects-section-slider__image-slide">
              <img
                class="projects-section-slider__image"
                :src="brandSystemSlide"
                alt="KOLOBOX brand system slide"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </div>
    </div>

    <div class="projects-section-slider__controls">
      <div class="projects-section-slider__dots" aria-label="Projects navigation">
        <button
          v-for="index in slideCount"
          :key="index"
          type="button"
          class="projects-section-slider__dot"
          :class="{
            'projects-section-slider__dot--active': selectedIndex === index - 1,
          }"
          :aria-label="`Go to slide ${index}`"
          :aria-pressed="selectedIndex === index - 1"
          @click="scrollTo(index - 1)"
        />
      </div>

      <button
        type="button"
        class="projects-section-slider__autoplay-toggle"
        :aria-pressed="!isAutoplayPlaying"
        @click="toggleAutoplay"
      >
        {{ isAutoplayPlaying ? "Пауза" : "Продолжить" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import ProjectsSectionMockupScene from "@components/ProjectsSectionMockupScene.vue";

import brandSystemSlide from "@assets/slides/kolobox/kolobox-brand-system-slide.png";
import streetPosterSlide from "@assets/slides/kolobox/kolobox-street-poster-slide.png";

const slideCount = 3;
const selectedIndex = ref(0);
const isAutoplayPlaying = ref(true);
let autoplayTimer: ReturnType<typeof setInterval> | null = null;
const [emblaRef, emblaApi] = emblaCarouselVue({
  align: "center",
  loop: false,
});

const updateSelectedIndex = () => {
  selectedIndex.value = emblaApi.value?.selectedScrollSnap() ?? 0;
};

const stopAutoplay = () => {
  if (!autoplayTimer) {
    return;
  }

  clearInterval(autoplayTimer);
  autoplayTimer = null;
};

const playNextSlide = () => {
  const api = emblaApi.value;

  if (!api) {
    return;
  }

  if (selectedIndex.value >= slideCount - 1) {
    isAutoplayPlaying.value = false;
    stopAutoplay();
    return;
  }

  const nextIndex = selectedIndex.value + 1;

  api.scrollTo(nextIndex);
};

const startAutoplay = () => {
  stopAutoplay();

  if (!emblaApi.value || !isAutoplayPlaying.value) {
    return;
  }

  autoplayTimer = setInterval(() => {
    playNextSlide();
  }, 4000);
};

const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index);

  if (isAutoplayPlaying.value) {
    startAutoplay();
  }
};

const toggleAutoplay = () => {
  if (isAutoplayPlaying.value) {
    isAutoplayPlaying.value = false;
    stopAutoplay();
  } else {
    isAutoplayPlaying.value = true;

    if (selectedIndex.value >= slideCount - 1) {
      emblaApi.value?.scrollTo(0);
    }

    startAutoplay();
  }
};

watch(emblaApi, (api, previousApi) => {
  previousApi?.off("select", updateSelectedIndex);
  previousApi?.off("reInit", updateSelectedIndex);

  if (!api) {
    return;
  }

  updateSelectedIndex();
  api.on("select", updateSelectedIndex);
  api.on("reInit", updateSelectedIndex);
  startAutoplay();
});

watch(selectedIndex, (index) => {
  if (index < slideCount - 1 || !isAutoplayPlaying.value) {
    return;
  }

  isAutoplayPlaying.value = false;
  stopAutoplay();
});

onBeforeUnmount(() => {
  emblaApi.value?.off("select", updateSelectedIndex);
  emblaApi.value?.off("reInit", updateSelectedIndex);
  stopAutoplay();
});
</script>
