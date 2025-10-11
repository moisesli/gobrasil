<template>
  <div>
    <main class="min-h-screen bg-white">
      <!-- Hero Section com Banner -->
      <div class="relative overflow-hidden h-[250px]">
        <!-- Imagem de Fundo -->
        <div class="absolute inset-0">
          <img 
            src="/viagem-para-pernambuco-capa.jpg" 
            alt="Viagem para Pernambuco"
            class="w-full h-full object-cover"
          />
          <!-- Overlay escuro para melhor legibilidade do texto -->
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        
        <!-- Conteúdo -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl">
              {{ t('guideTitle') }}
            </h1>
          </div>
        </div>
      </div>

      <!-- Conteúdo Principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        
        <!-- Descrição -->
        <div class="text-center mb-12 max-w-4xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t('guideDescription') }}
          </p>
        </div>

        <!-- Grid de Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          
          <!-- Card: Custo de Vida -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideCostOfLivingTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideCostOfLivingText') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Documentação e Vistos -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideDocumentationTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed mb-2">{{ t('guideDocumentationText1') }}</p>
                <p class="text-gray-600 leading-relaxed">{{ t('guideDocumentationText2') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Trabalho e Estudo -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideWorkStudyTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideWorkStudyText') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Saúde e Segurança -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideHealthSafetyTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideHealthSafetyText') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Benefícios Sociais -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideSocialBenefitsTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideSocialBenefitsText') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Cultura e Costumes -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideCultureTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideCultureText') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Transporte -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideTransportTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideTransportText') }}</p>
              </div>
            </div>
          </article>

          <!-- Card: Dicas Úteis -->
          <article class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-500 transform hover:scale-105">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ t('guideTipsTitle') }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ t('guideTipsText') }}</p>
              </div>
            </div>
          </article>

        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'

const { t, currentLanguage, loadSavedLanguage } = useTranslations()

onMounted(() => {
  loadSavedLanguage()
})

useHead({
  title: 'Guia do Brasil - Go Brazil',
  meta: [
    { name: 'description', content: 'Guia completo para descobrir o Brasil.' }
  ]
})
</script>