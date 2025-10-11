<template>
  <header class="bg-white dark:bg-slate-900 shadow-sm transition-colors duration-300">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center -ml-4">
          <div class="flex items-center space-x-1">
            <div class="w-28 h-28 flex items-center justify-center mt-4">
              <img src="/logo-editado.png" alt="Go Brazil Logo" class="w-28 h-28 object-contain ml-4" />
            </div>
            <span class="text-2xl font-bold text-gray-900 dark:text-white" style="font-family: 'Anton', sans-serif; letter-spacing: 0.1em;">Go Brazil</span>
          </div>
        </div>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-6">
            <NuxtLink 
              to="/" 
              class="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-2 py-2 text-sm font-medium transition-colors group"
              @click="scrollToTop"
            >
              {{ t('home') }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </NuxtLink>
            <NuxtLink 
              to="/sobre-nos" 
              class="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-2 py-2 text-sm font-medium transition-colors group"
            >
              {{ t('about') }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </NuxtLink>
            <NuxtLink 
              to="/planos" 
              class="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-2 py-2 text-sm font-medium transition-colors group"
            >
              {{ t('plans') }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </NuxtLink>
            <NuxtLink 
              to="/guia-do-brasil" 
              class="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-2 py-2 text-sm font-medium transition-colors group"
            >
              {{ t('guide') }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </NuxtLink>
            <NuxtLink 
              to="/faq" 
              class="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-2 py-2 text-sm font-medium transition-colors group"
            >
              {{ t('faq') }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </NuxtLink>
            <NuxtLink 
              to="/contato" 
              class="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-2 py-2 text-sm font-medium transition-colors group"
            >
              {{ t('contact') }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 dark:bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </NuxtLink>
          </div>
        </div>

        <!-- Right side buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Language selector -->
          <div class="flex items-center space-x-1">
            <Icon name="mdi:earth" class="w-4 h-4 text-gray-500" />
            <select 
              v-model="currentLanguage" 
              @change="changeLanguage"
              class="text-sm text-gray-700 bg-transparent border-none focus:ring-0 cursor-pointer"
            >
              <option value="pt">{{ t('language') }}</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          
          <!-- Action buttons -->
          <button @click="openLoginModal" class="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 px-4 py-2 text-sm font-medium transition-colors">
            {{ t('login') }}
          </button>
          <button @click="openRegisterModal" class="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            {{ t('register') }}
          </button>
          
          <!-- Dark mode toggle button -->
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            :title="isDarkMode ? 'Modo Claro' : 'Modo Escuro'"
          >
            <svg v-if="!isDarkMode" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-blue-600 p-2"
          >
            <Icon name="mdi:menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <NuxtLink 
            to="/" 
            class="relative text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium group"
            @click="scrollToTop"
          >
            {{ t('home') }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </NuxtLink>
          <NuxtLink 
            to="/sobre-nos" 
            class="relative text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium group"
          >
            {{ t('about') }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </NuxtLink>
          <NuxtLink 
            to="/planos" 
            class="relative text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium group"
          >
            {{ t('plans') }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </NuxtLink>
          <NuxtLink 
            to="/guia-do-brasil" 
            class="relative text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium group"
          >
            {{ t('guide') }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </NuxtLink>
          <NuxtLink 
            to="/faq" 
            class="relative text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium group"
          >
            {{ t('faq') }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </NuxtLink>
          <NuxtLink 
            to="/contato" 
            class="relative text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium group"
          >
            {{ t('contact') }}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </NuxtLink>
          
          <!-- Mobile buttons -->
          <div class="pt-4 pb-3 border-t border-gray-200">
            <div class="flex items-center px-3 space-x-3">
              <button @click="openLoginModal" class="text-green-600 hover:text-green-700 px-4 py-2 text-sm font-medium">
                {{ t('login') }}
              </button>
              <button @click="openRegisterModal" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium">
                {{ t('register') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Modal de Login -->
  <div v-if="isLoginModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeLoginModal">
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4" @click.stop>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">{{ t('login') }}</h2>
        <button @click="closeLoginModal" class="text-gray-500 hover:text-gray-700">
          <Icon name="mdi:close" class="w-6 h-6" />
        </button>
      </div>
      
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            {{ t('email') }}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="loginForm.email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            :placeholder="t('emailPlaceholder')"
          />
        </div>
        
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            {{ t('password') }}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="loginForm.password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            :placeholder="t('passwordPlaceholder')"
          />
        </div>
        
        <div class="flex items-center justify-between mb-6">
          <label class="flex items-center">
            <input id="remember-me" name="remember" type="checkbox" v-model="loginForm.remember" class="rounded border-gray-300 text-green-600 focus:ring-green-500">
            <span class="ml-2 text-sm text-gray-600">{{ t('rememberMe') }}</span>
          </label>
          <a href="#" class="text-sm text-green-600 hover:text-green-700">{{ t('forgotPassword') }}</a>
        </div>
        
        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          {{ t('login') }}
        </button>
        
        <div class="mt-4 text-center">
          <span class="text-sm text-gray-600">{{ t('noAccount') }}</span>
          <a href="#" @click="closeLoginModal(); openRegisterModal()" class="text-sm text-green-600 hover:text-green-700 ml-1">{{ t('signUpHere') }}</a>
        </div>
      </form>
    </div>
  </div>
  
  <!-- Modal de Cadastro -->
  <div v-if="isRegisterModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeRegisterModal">
    <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4" @click.stop>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">{{ t('register') }}</h2>
        <button @click="closeRegisterModal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">{{ t('name') }}</label>
          <input
            id="register-name"
            name="name"
            type="text"
            v-model="registerForm.name"
            :placeholder="t('namePlaceholder')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label for="register-birthdate" class="block text-sm font-medium text-gray-700 mb-2">{{ t('birthDate') }}</label>
          <input
            id="register-birthdate"
            name="birthDate"
            type="date"
            v-model="registerForm.birthDate"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">{{ t('email') }}</label>
          <input
            id="register-email"
            name="email"
            type="email"
            v-model="registerForm.email"
            :placeholder="t('emailPlaceholder')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">{{ t('password') }}</label>
          <input
            id="register-password"
            name="password"
            type="password"
            v-model="registerForm.password"
            :placeholder="t('passwordPlaceholder')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          {{ t('register') }}
        </button>
        
        <div class="mt-4 text-center">
          <span class="text-sm text-gray-600">{{ t('alreadyHaveAccount') }}</span>
          <a href="#" @click="closeRegisterModal(); openLoginModal()" class="text-sm text-green-600 hover:text-green-700 ml-1">{{ t('loginHere') }}</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'
import { useTheme } from '~/composables/useTheme'

const { currentLanguage, changeLanguage: changeGlobalLanguage, t, loadSavedLanguage } = useTranslations()
const { isDarkMode, toggleTheme, loadSavedTheme } = useTheme()

const isMobileMenuOpen = ref(false)
const isLoginModalOpen = ref(false)
const isRegisterModalOpen = ref(false)
const loginForm = ref({
  email: '',
  password: '',
  remember: false
})
const registerForm = ref({
  name: '',
  birthDate: '',
  email: '',
  password: ''
})

const changeLanguage = (event) => {
  changeGlobalLanguage(event.target.value)
}

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const openLoginModal = () => {
  isLoginModalOpen.value = true
}

const closeLoginModal = () => {
  isLoginModalOpen.value = false
  // Limpar formulário ao fechar
  loginForm.value = {
    email: '',
    password: '',
    remember: false
  }
}

const handleLogin = () => {
  // Aqui você pode implementar a lógica de login
  console.log('Login attempt:', loginForm.value)
  // Por enquanto, apenas fecha o modal
  alert('Login realizado com sucesso!')
  closeLoginModal()
}

const openRegisterModal = () => {
  isRegisterModalOpen.value = true
}

const closeRegisterModal = () => {
  isRegisterModalOpen.value = false
  // Limpar formulário ao fechar
  registerForm.value = {
    name: '',
    birthDate: '',
    email: '',
    password: ''
  }
}

const handleRegister = () => {
  // Aqui você pode implementar a lógica de cadastro
  console.log('Register attempt:', registerForm.value)
  // Por enquanto, apenas fecha o modal
  alert('Cadastro realizado com sucesso!')
  closeRegisterModal()
}

// Carregar idioma salvo no localStorage
onMounted(() => {
  loadSavedLanguage()
  loadSavedTheme()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>
