const routes = [
  { path: '/', redirect: '/bio'},
  { name: "Bio", path: "/bio", component: Bio },
  { name: "Photos", path: "/photos", component: Photos },
  { name: "Findme", path: "/findme", component: Findme },
  { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});
