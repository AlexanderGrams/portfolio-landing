import { createApp } from "vue";
import App from "./App.vue";
import { inject } from "@vercel/analytics";

import "@styles/tailwind.css";
import "@styles/main.scss";

if (import.meta.env.PROD) inject();

createApp(App).mount("#app");
