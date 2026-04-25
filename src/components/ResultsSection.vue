<template>
  <section id="results" class="results-section" aria-labelledby="results-title">
    <div class="results-section__header">
      <h2 id="results-title" class="results-section__title">Результаты</h2>
    </div>

    <article
      v-for="metric in metrics"
      :key="metric.value"
      class="results-section__item"
      :class="metric.className"
    >
      <ResultMetric
        :value="metric.value"
        :label="metric.label"
        :description="metric.description"
        :items="metric.items"
        :screens="metric.screens"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import ResultMetric from "@components/ResultMetric.vue";

import checkoutScreen from "@assets/screens/kolobox/kolobox-checkout-screen.png";
import homeScreen from "@assets/screens/kolobox/kolobox-home-screen.png";
import splashScreen from "@assets/screens/kolobox/kolobox-splash-screen.png";

type Screen = {
  src: string;
  alt: string;
};

type Metric = {
  value: string;
  label: string;
  description: string;
  items: string[];
  screens: Screen[];
  className?: string;
};

const metrics: Metric[] = [
  {
    value: "78% → 90%",
    label: "успешный самовывоз",
    description:
      "После оплаты пользователи часто спрашивали: где забирать, когда можно прийти и что делать, если не успевают.",
    items: [
      "переписала статусы",
      "собрала все в одном месте: адрес, окно самовывоза, инструкция, контакт",
      "добавила быстрые действия: маршрут, написать, позвонить, отменить",
    ],
    screens: [
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
    ],
  },
  {
    value: "-35%",
    label: "вопросов после оплаты",
    description:
      "Пользователю стало проще понять, что происходит с заказом после оплаты и где искать ключевые детали.",
    items: [
      "вывела статус заказа на первый экран",
      "разделила адрес, время и контактные действия",
      "сократила путь до поддержки и маршрута",
    ],
    screens: [
      {
        src: homeScreen,
        alt: "KOLOBOX home screen",
      },
      {
        src: checkoutScreen,
        alt: "KOLOBOX checkout screen",
      },
      {
        src: splashScreen,
        alt: "KOLOBOX splash screen",
      },
    ],
    className: "results-section__item--alt",
  },
  {
    value: "+18%",
    label: "завершение заказа",
    description:
      "Сценарий от оплаты до получения стал понятнее: пользователь видит следующий шаг и не теряет контекст заказа.",
    items: [
      "уточнила последовательность шагов после оплаты",
      "подсветила важные ограничения по времени",
      "добавила понятные действия для изменения планов",
    ],
    screens: [
      {
        src: splashScreen,
        alt: "KOLOBOX splash screen",
      },
      {
        src: homeScreen,
        alt: "KOLOBOX home screen",
      },
      {
        src: checkoutScreen,
        alt: "KOLOBOX checkout screen",
      },
    ],
  },
];
</script>
