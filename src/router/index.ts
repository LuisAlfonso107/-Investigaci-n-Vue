import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UsoDiarioLogicaBasicaVue.vue"),
    },
    {
      path: "/investigacion-reactiva",
      name: "investigacion",
      component: () => import("../views/InvestigacionReactividad.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/router-view-y-router-link",
      name: "router-view-y-router-link",
      component: () => import("../views/RouterViewAndRouterLink.vue"),
    },
    {
      path: "/suspense-examples",
      name: "suspense-examples",
      component: () => import("../views/SuspenseExamples.vue"),
    },
  ],
});

export default router;
