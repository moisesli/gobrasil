<template>
  <div>
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900 flex items-center justify-center py-12 px-4">
      <div class="max-w-md w-full">
        <!-- Card de Redefinição -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <!-- Ícone -->
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Icon name="mdi:lock-reset" class="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <!-- Título -->
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
            {{ t('resetPasswordTitle') }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400 text-center mb-8">
            {{ t('resetPasswordSubtitle') }}
          </p>

          <!-- Formulário -->
          <form v-if="!success" @submit.prevent="handleResetPassword" class="space-y-6">
            <div>
              <label for="new-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ t('resetPasswordNewPassword') }}
              </label>
              <input
                type="password"
                id="new-password"
                v-model="resetForm.password"
                required
                minlength="6"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                :placeholder="t('resetPasswordNewPasswordPlaceholder')"
              />
            </div>

            <div>
              <label for="confirm-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ t('resetPasswordConfirmPassword') }}
              </label>
              <input
                type="password"
                id="confirm-password"
                v-model="resetForm.confirmPassword"
                required
                minlength="6"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                :placeholder="t('resetPasswordConfirmPasswordPlaceholder')"
              />
            </div>

            <!-- Mensagem de erro -->
            <div v-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              <span v-if="!loading">{{ t('resetPasswordButton') }}</span>
              <span v-else>{{ t('resetPasswordLoading') }}</span>
            </button>
          </form>

          <!-- Mensagem de sucesso -->
          <div v-else class="text-center">
            <div class="mb-6">
              <Icon name="mdi:check-circle" class="w-16 h-16 text-green-600 dark:text-green-400 mx-auto" />
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ t('resetPasswordSuccessTitle') }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ t('resetPasswordSuccessMessage') }}
            </p>
            <NuxtLink
              to="/"
              class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {{ t('resetPasswordBackToHome') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Link para voltar -->
        <div class="text-center mt-6">
          <NuxtLink
            to="/"
            class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
          >
            {{ t('resetPasswordBackToLogin') }}
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'

const { t, loadSavedLanguage } = useTranslations()
const route = useRoute()

const resetForm = ref({
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref(false)
const token = ref(route.query.token || '')

// Validar se há token na URL
onMounted(() => {
  loadSavedLanguage()
  
  if (!token.value) {
    error.value = 'Token de recuperação inválido ou expirado.'
  }
})

const handleResetPassword = async () => {
  error.value = ''
  
  // Validar senhas
  if (resetForm.value.password.length < 6) {
    error.value = 'A senha deve ter no mínimo 6 caracteres'
    return
  }
  
  if (resetForm.value.password !== resetForm.value.confirmPassword) {
    error.value = 'As senhas não coincidem'
    return
  }
  
  loading.value = true
  
  try {
    const response = await $fetch('/api/redefinir-senha', {
      method: 'POST',
      body: {
        token: token.value,
        novaSenha: resetForm.value.password
      }
    })
    
    success.value = true
    
  } catch (err) {
    error.value = err.data?.message || 'Erro ao redefinir senha. Tente novamente.'
    console.error('Erro ao redefinir senha:', err)
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Redefinir Senha - Go Brazil',
  meta: [
    { name: 'description', content: 'Redefina sua senha do Go Brazil' }
  ]
})
</script>
