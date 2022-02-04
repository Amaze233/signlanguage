import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../layout/Layout";
import Login from "../views/login/Login";
import Dictionary from "../views/dictionary/Dictionary";
import Test from "../views/Test";
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
        name: '学习列表',
        component: DictionaryList
      },
      {
        path: 'dictionaryPages',
        name: '学习页面',
        component: DictionaryPages
      },
      {
        path: "test",
        name: 'Test',
        component: Test
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
