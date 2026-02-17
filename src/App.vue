<template>
  <div class="min-h-dvh bg-zinc-950 text-zinc-50">
    <!-- Hero with Vanta background -->
    <section class="relative min-h-dvh overflow-hidden">
      <VantaBirds class="absolute inset-0 h-full w-full" />

      <div class="relative z-10">
        <div
          class="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8"
        >
          <header class="py-6">
            <div class="flex items-center justify-between gap-6">
              <a
                href="#"
                class="text-sm font-semibold tracking-wide hover:text-white"
              >
                Alina
              </a>

              <nav class="flex gap-4 text-sm text-zinc-300">
                <a class="hover:text-white" href="#projects">Projects</a>
                <a class="hover:text-white" href="#about">About</a>
                <a class="hover:text-white" href="#contacts">Contacts</a>
              </nav>
            </div>
          </header>

          <div class="flex flex-1 items-center pb-16">
            <div class="max-w-2xl">
              <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
                Portfolio
              </h1>
              <p class="mt-4 text-zinc-200">
                Каркас...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content below hero -->
    <main class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="projects" class="py-16">
        <h2 class="text-2xl font-semibold">Projects</h2>
        <p class="mt-3 text-zinc-300">Секции будут тут.</p>
      </section>

      <section id="about" class="py-16">
        <h2 class="text-2xl font-semibold">About</h2>
        <p class="mt-3 text-zinc-300">Секции будут тут.</p>
      </section>
    </main>

    <!-- Footer -->
    <footer
      id="contacts"
      class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div
        class="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="text-sm font-medium">Contacts</div>
        <div class="flex flex-wrap gap-3 text-sm text-zinc-300">
          <a class="hover:text-white" href="mailto:mail@example.com">Email</a>
          <a
            class="hover:text-white"
            href="https://t.me/..."
            target="_blank"
            rel="noreferrer"
            >Telegram</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import VantaBirds from "@components/VantaBirds.vue";
</script>
