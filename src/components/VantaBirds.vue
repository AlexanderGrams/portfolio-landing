<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

type VantaEffect = { destroy?: () => void };

type VantaOptions = {
  el: HTMLElement;
  THREE?: unknown;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number;
  backgroundAlpha?: number;
  color1?: number;
  color2?: number;
  birdSize?: number;
  wingSpan?: number;
  speedLimit?: number;
  separation?: number;
  alignment?: number;
  cohesion?: number;
  quantity?: number;
};

const props = defineProps<{
  options?: Partial<VantaOptions>;
}>();

const el = ref<HTMLElement | null>(null);
let effect: VantaEffect | null = null;

onMounted(() => {
  if (!el.value) return;

  const baseOptions: VantaOptions = {
    el: el.value,
    THREE,

    // Управление
    mouseControls: true, // реакция на мышь
    touchControls: true, // реакция на тач
    gyroControls: false, // гироскоп (обычно лучше false)

    // Минимальные размеры холста
    minHeight: 200,
    minWidth: 200,

    // Масштаб рендера (качество/нагрузка)
    scale: 1.0,
    scaleMobile: 0.75,

    // Фон
    backgroundColor: 0x0b0b0f, // цвет фона
    backgroundAlpha: 1.0, // прозрачность 0..1

    // Цвета эффекта
    color1: 0x7aa2ff,
    color2: 0xff8ad6,

    // “Внешность” птиц
    birdSize: 1.1,
    wingSpan: 22.0,

    // Движение и “стая”
    speedLimit: 4.0,
    separation: 30.0,
    alignment: 38.0,
    cohesion: 16.0,

    // Кол-во птиц (самое влияет на производительность)
    quantity: 3.0,
  };

  effect = BIRDS({
    ...baseOptions,
    ...(props.options ?? {}),
  });
});

onBeforeUnmount(() => {
  effect?.destroy?.();
  effect = null;
});
</script>

<template>
  <!-- Height is set from the parent via classes on the component. -->
  <div ref="el" class="w-full" />
</template>
