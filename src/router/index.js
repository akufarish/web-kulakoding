import { createRouter, createWebHistory } from "vue-router";
const Login = () => import('');
const Register = () => import('');
const ResetPassword = () => import('');
const Dashboard = () => import('@/views/Dashboard/Dashboard.vue');
const Profile = () => import('@/views/Dashboard/Profile.vue');
// const Detail = () => import('@/views/Dashboard/Detail.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   {
  //     path: "/login",
  //     name: "login",
  //     component: Login,
  //     // meta: {
  //     //   guestRequired: true,
  //     // },
  //   },
  //   {
  //     path: "/register",
  //     name: "register",
  //     component: Register,
  //     // meta: {
  //     //   guestRequired: true,
  //     // },
  //   },
  //   {
  //     path: "/reset-password",
  //     name: "reset-password",
  //     component: ResetPassword,
  //     // meta: {
  //     //   guestRequired: true,
  //     // },
  //   },
  //   {
  //     path: "/",
  //     name: "index",
  //     component: () => import("../views/Index.vue"),
  //     // redirect: { path: "/dashboard" },
  //     // meta: {
  //     //   authRequired: true,
  //     // },
  //     children: [
  //       {
  //         path: "/dashboard",
  //         name: "dashboard",
  //         component: Dashboard,
  //       },
  //       {
  //         path: "/user",
  //         name: "user",
  //         component: Profile,
  //       },
  //     ],
  //   },
  // ],
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue"),
      // meta: {
      //   guestRequired: true,
      // },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      // meta: {
      //   authRequired: true,
      // },
    },
    {
      path: "/user",
      name: "user",
      component: Profile,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth_token");
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (isLoggedIn == null) {
      next("/");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestRequired)) {
    if (isLoggedIn == null) {
      next();
    } else {
      next("/home");
    }
  } else {
    next();
  }
});

export default router;