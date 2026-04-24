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
const [emblaRef, emblaApi] = emblaCarouselVue({
  align: "center",
  loop: false,
});

const updateSelectedIndex = () => {
  selectedIndex.value = emblaApi.value?.selectedScrollSnap() ?? 0;
};

const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index);
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
});

onBeforeUnmount(() => {
  emblaApi.value?.off("select", updateSelectedIndex);
  emblaApi.value?.off("reInit", updateSelectedIndex);
});
</script>
