import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../layout/Layout";
import Login from "../views/login/Login";
import Homework from "../views/homework/Homework";
import Dictionary from "../views/dictionary/Dictionary";
import test from "../views/test";
import DictionaryPages from "../views/dictionary/DictionaryPages";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'homework',
        name: 'Homework',
        component: Homework
      },
      {
        path: 'dictionary',
        name: 'Dictionary',
        component: Dictionary,
      },
      {
        path: 'dictionaryPages',
        name: 'DictionaryPages',
        component: DictionaryPages
      },
      {
        path: "test",
        name: 'Test',
        component: test
      }
    ]
  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
