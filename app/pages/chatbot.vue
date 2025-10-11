<template>
  <div>
    <main class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-8">{{ t('chatbotTitle') }}</h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {{ t('chatbotSubtitle') }}
          </p>
          
          <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div class="bg-gray-100 rounded-lg p-6 mb-6 min-h-64">
              <div class="text-center text-gray-500">
                <Icon name="mdi:chat" class="w-16 h-16 mx-auto mb-4 text-green-600" />
                <p>{{ t('chatbotDevelopment') }}</p>
                <p class="text-sm mt-2">{{ t('chatbotComingSoon') }}</p>
              </div>
            </div>
            
            <div class="flex space-x-4">
              <input 
                id="chatbot-input"
                name="chatbot-message"
                type="text" 
                :placeholder="t('chatbotPlaceholder')"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled
              >
              <button 
                class="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300" 
                style="background-color: #16a34a !important;"
                disabled
              >
                {{ t('chatbotSendButton') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'

const { t, loadSavedLanguage } = useTranslations()

onMounted(() => {
  loadSavedLanguage()
})

useHead({
  title: 'Chatbot - Go Brazil',
  meta: [
    { name: 'description', content: 'Chatbot de suporte da Go Brazil.' }
  ]
})
</script>