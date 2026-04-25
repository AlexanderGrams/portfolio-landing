<template>
  <div class="page">
    <section class="page__hero">
      <div class="page__container">
        <HeaderBar />
        <HeroSection />
      </div>
    </section>

    <main class="page__main">
      <ProjectsSection />
      <ResultsSection />

      <div class="page__container">
        <ResumeSection />
      </div>
    </main>

    <div class="page__container">
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from "@components/HeaderBar.vue";
import HeroSection from "@components/HeroSection.vue";
import ProjectsSection from "@components/ProjectsSection.vue";
import ResultsSection from "@components/ResultsSection.vue";
import ResumeSection from "@components/ResumeSection.vue";
import SiteFooter from "@components/SiteFooter.vue";
</script>
