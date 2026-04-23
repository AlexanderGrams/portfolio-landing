<template>
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-section__content">
      <h1 id="hero-title" class="hero-section__title">
        <span class="hero-section__title-main">Алина Грамс</span>
        <span class="hero-section__title-accent">UX/UI дизайнер</span>
      </h1>

      <p class="hero-section__description">
        Проектирую мобильные и веб-приложения.
        <br />
        От идеи и прототипа до макетов, которые удобно внедрять в разработку
      </p>

      <BaseButtonLink
        class="hero-section__cta"
        href="https://t.me/..."
        target="_blank"
        rel="noreferrer"
      >
        Написать в Telegram
      </BaseButtonLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButtonLink from "@components/BaseButtonLink.vue";
</script>
