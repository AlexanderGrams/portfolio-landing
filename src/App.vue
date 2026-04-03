<template>
  <div class="page">
    <section class="page__hero">
      <div class="page__container">
        <HeaderBar />
        <HeroSection />
      </div>
    </section>

    <main class="page__main page__container">
      <ProjectsSection />
      <ResumeSection />
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
import ResumeSection from "@components/ResumeSection.vue";
import SiteFooter from "@components/SiteFooter.vue";
</script>
