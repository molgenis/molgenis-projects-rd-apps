import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import Disclaimer from '../views/Disclaimer.vue'
import Documents from '../views/Documents.vue'
import GenturisGovernance from '../views/GenturisGovernance.vue'
import MembersArea from '../views/MembersArea.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

// const initialState = window.__INITIAL_STATE__ || {}
// history: createWebHistory(initialState.baseUrl),

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
      meta: {
        title: 'About Us'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
      meta: {
        title: 'Contact Us'
      }
    },
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: Disclaimer,
      meta: {
        title: 'Disclaimer'
      }
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents,
      meta: {
        title: 'Documents'
      }
    },
    {
      path: '/governance',
      name: 'governance',
      component: GenturisGovernance,
      meta: {
        title: 'Governance'
      }
    },
    {
      path: '/members-area',
      name: 'members-area',
      component: MembersArea,
      meta: {
        title: 'Members Area'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
      meta: {
        title: 'Privacy Policy'
      }
    }
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | ERN GENTURIS` || 'ERN GENTURIS'
})

export default router