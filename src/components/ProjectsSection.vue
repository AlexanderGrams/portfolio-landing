<template>
  <section
    id="projects"
    class="projects-section"
    aria-labelledby="projects-title"
  >
    <article class="projects-section__slide">
      <div class="projects-section__content">
        <div class="projects-section__copy">
          <span class="projects-section__tag">B2C</span>
          <h2 id="projects-title" class="projects-section__title">KOLOBOX</h2>
          <p class="projects-section__description">
            Социальный eco-food стартап для снижения пищевых отходов через
            покупку скидочных сюрприз-боксов.
          </p>
          <p class="projects-section__description">
            Проектировала дизайн пользовательских сценариев от онбординга до
            оплаты.
          </p>
        </div>
      </div>

      <ProjectsSectionSlider />

      <div class="projects-section__content">
        <div class="projects-section__footer">
          <BaseButtonLink class="projects-section__button" href="#resume">
            Открыть Figma
          </BaseButtonLink>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import BaseButtonLink from "@components/BaseButtonLink.vue";
import ProjectsSectionSlider from "@components/ProjectsSectionSlider.vue";
</script>
