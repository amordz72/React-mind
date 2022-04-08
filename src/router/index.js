import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import ReactView from "../views/ReactView.vue";



const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/reactView",
    name: "ReactView",
    component: ReactView,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;