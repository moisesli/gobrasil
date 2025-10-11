<template>
  <div>
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900">
      <!-- Hero Section com Banner -->
      <div class="relative overflow-hidden h-[250px]">
        <!-- Imagem de Fundo -->
        <div class="absolute inset-0">
          <img 
            src="/BRASIL-CULTURA-1.jpg" 
            alt="Contato Go Brazil"
            class="w-full h-full object-cover"
          />
          <!-- Overlay escuro para melhor legibilidade do texto -->
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        
        <!-- Conteúdo -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              {{ t('contactTitle') }}
            </h1>
            <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {{ t('contactSubtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Conteúdo Principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 lg:mt-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Formulário de Contato -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-10">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie sua mensagem</h2>
            <form class="space-y-6">
              <div>
                <label for="contact-name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ t('contactName') }}
                </label>
                <input 
                  id="contact-name" 
                  name="name" 
                  type="text" 
                  placeholder="Seu nome completo"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
              </div>
              
              <div>
                <label for="contact-email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email ou WhatsApp
                </label>
                <input 
                  id="contact-email" 
                  name="email" 
                  type="text" 
                  placeholder="email@exemplo.com ou +55 11 98765-4321"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
              </div>
              
              <div>
                <label for="contact-message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ t('contactMessage') }}
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows="5" 
                  placeholder="Como podemos ajudar você?"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {{ t('contactSendButton') }}
              </button>
            </form>
          </div>

          <!-- Informações de Contato -->
          <div class="space-y-6">
            <!-- Card WhatsApp -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-3">
                    Entre em contato direto pelo WhatsApp para respostas rápidas.
                  </p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank"
                    class="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors"
                  >
                    Enviar mensagem
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card Email -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-3">
                    Envie suas dúvidas por email e responderemos em breve.
                  </p>
                  <a 
                    href="mailto:contato@gobrazil.com" 
                    class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                  >
                    contato@gobrazil.com
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card Horário de Atendimento -->
            <div class="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-2xl shadow-xl p-8 text-white">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-2">Horário de Atendimento</h3>
                  <p class="text-green-100 dark:text-green-50 mb-2">
                    Segunda a Sexta: 9h - 18h
                  </p>
                  <p class="text-green-100 dark:text-green-50">
                    Sábado: 9h - 13h
                  </p>
                </div>
              </div>
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
  title: 'Contato - Go Brazil',
  meta: [
    { name: 'description', content: 'Entre em contato com a Go Brazil.' }
  ]
})
</script>