import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import router from "./router";

import { loadFonts } from "./plugins/webfontloader";
loadFonts();

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
