import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../layout/Layout";
import Login from "../views/login/Login";
import Dictionary from "../views/dictionary/Dictionary";
import test from "../views/test";
import DictionaryPages from "../views/dictionary/DictionaryPages";
import LoginRegister from "../views/login/LoginRegister";
import HomeworkPages from "../views/homework/HomeworkPages";
import Homework from "../views/homework/Homework";
import DictionaryList from "../views/dictionary/DictionaryList";
import HomeworkList from "../views/homework/HomeworkList";

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
        name: '测试',
        component: Homework,
      },
      {
        path: 'homeworkList',
        name: '测试列表',
        component: HomeworkList
      },
      {
        path: 'homeworkPages',
        name: '测试页面',
        component: HomeworkPages
      },
      {
        path: 'dictionary',
        name: '学习',
        component: Dictionary,
      },
      {
        path: 'dictionaryList',
        name: 'DictionaryList',
        component: DictionaryList
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
      },
      {
        path: "/login",
        name: 'Login',
        component: LoginRegister
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
