
const routes = [
  { path: '/', redirect: '/bio'},
  { name: "Bio", path: "/bio", component: Bio },
  { name: "Photos", path: "/photos", component: Photos }
 // { path: '/:catchAll(.*)', component: NotFound }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});




router.beforeEach((to, from, next) => {
      document.getElementsByClassName('preloader-wrap').classList.remove('hidden')
      next()
    })

    router.afterEach(() => {
      setTimeout(() => {
        const imgs = [...document.querySelectorAll('img')]
        const audios = [...document.querySelectorAll('audio')]

        const imgPromises = imgs.map(img => new Promise(resolve => {
          if (img.complete) return resolve()
          img.onload = img.onerror = () => resolve()
        }))

        const audioPromises = audios.map(aud => new Promise(resolve => {
          aud.oncanplaythrough = () => resolve()
          aud.onerror = () => resolve()
        }))

        Promise.all([...imgPromises, ...audioPromises]).then(() => {
          document.getElementById('preloader').classList.add('hidden')
        })
      }, 100)
    })
