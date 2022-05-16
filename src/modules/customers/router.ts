import {Router,RouteRecordRaw} from "vue-router"

const routes:Array<RouteRecordRaw> = [
    {
        path:"/user",
        name:"user:login",
        component: () => import("./pages/Login-page.vue")
    },
    {
        path:"/register",
        name:"user:register",
        component: () => import("./pages/Register-page.vue")
    },
    {
        path:"/lost-password",
        name:"user:lost-password",
        component: () => import("./pages/LostPassword-page.vue")
    },
    {
        path:"/",
        name:"user:home",
        component: () => import("./pages/Home-page.vue")
    }
];

export default (router:Router) => routes.map((url:RouteRecordRaw) => router.addRoute(url))
