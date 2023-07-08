import { createRouter, createWebHistory } from 'vue-router'
import CategoriesView from '../views/CategoriesView.vue'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({page: parseInt(route.query?.page as  string || '1')})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoriesView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    },
    {
      path:'/event/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router
