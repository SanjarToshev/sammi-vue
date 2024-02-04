import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ArticleDetailView from "@/views/ArticleDetailView.vue";
import CreateArticleView from "@/views/CreateArticleView.vue";
import EditArticleView from "@/views/EditArticleView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/article/:slug',
      name: 'article-details',
      component: ArticleDetailView
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: CreateArticleView
    },
    {
      path: '/edit-article/:slug',
      name: 'edit-article',
      component: EditArticleView
    }
  ]
})

export default router
