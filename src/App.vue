<template>
  <div class="min-h-dvh bg-zinc-950 text-zinc-50">
    <div
      class="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8"
    >
      <!-- Header -->
      <header class="py-6 border-b border-white/10">
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

      <!-- Main (растягивает и прижимает футер) -->
      <main class="flex-1 py-10">
        <!-- позже тут будут секции -->
        <section class="py-10">
          <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
            Portfolio
          </h1>
          <p class="mt-4 max-w-2xl text-zinc-300">Каркас...</p>
        </section>
      </main>

      <!-- Footer (тот же фон, тот же контейнер) -->
      <footer id="contacts" class="py-10 border-t border-white/10">
        <div
          class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
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
  </div>
</template>

<script setup lang="ts"></script>
