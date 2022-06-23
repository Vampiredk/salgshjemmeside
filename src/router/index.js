import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  connectAuthgEmulator,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { showLoginError } from './Firebase'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kurv',
    name: 'kurv',

    component: () => import('../views/KurvView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDUKCYyOm_MsCXGe0BG6cWUQyH0Sopu0lg',
  authDomain: 'salgssidelog.firebaseapp.com',
  projectId: 'salgssidelog',
  storageBucket: 'salgssidelog.appspot.com',
  messagingSenderId: '1040433312578',
  appId: '1:1040433312578:web:132e802a58808902cf8edb',
  measurementId: 'G-982TQCJQZL'
})

const auth = getAuth(firebaseApp)

connectAuthgEmulator(auth, 'http://localhost:8080/')


const logInEmailPassword = async () =>{
  const loginEmail = txtEmail.value
  const loginPassword = txtPassword.value

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCredential.user)
  }
  catch(error) {
    console.log(error)
    showLoginError(error)
  }
  
}
export default router
