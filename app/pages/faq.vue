<template>
  <div>
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900">
      <!-- Hero Section com Banner -->
      <div class="relative overflow-hidden h-[300px]">
        <!-- Imagem de Fundo -->
        <div class="absolute inset-0">
          <img 
            src="/que-ver-en-brasil.jpg" 
            alt="FAQ Brasil"
            class="w-full h-full object-cover"
          />
          <!-- Overlay escuro para melhor legibilidade do texto -->
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        
        <!-- Conteúdo -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              {{ t('faqTitle') }}
            </h1>
            <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {{ t('faqSubtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ Content -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div class="space-y-6">
            
            <!-- FAQ 1 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                <span class="pt-0.5">{{ t('faqQuestion1') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer1') }}
              </p>
            </div>

            <!-- FAQ 2 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                <span class="pt-0.5">{{ t('faqQuestion2') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11 mb-2">
                {{ t('faqAnswer2Part1') }}
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer2Part2') }}
              </p>
            </div>

            <!-- FAQ 3 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                <span class="pt-0.5">{{ t('faqQuestion3') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11 mb-2">
                {{ t('faqAnswer3Part1') }}
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer3Part2') }}
              </p>
            </div>

            <!-- FAQ 4 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                <span class="pt-0.5">{{ t('faqQuestion4') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11 mb-2">
                {{ t('faqAnswer4Part1') }}
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer4Part2') }}
              </p>
            </div>

            <!-- FAQ 5 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</span>
                <span class="pt-0.5">{{ t('faqQuestion5') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer5') }}
              </p>
            </div>

            <!-- FAQ 6 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">6</span>
                <span class="pt-0.5">{{ t('faqQuestion6') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer6') }}
              </p>
            </div>

            <!-- FAQ 7 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">7</span>
                <span class="pt-0.5">{{ t('faqQuestion7') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11 mb-2">
                {{ t('faqAnswer7Part1') }}
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer7Part2') }}
              </p>
            </div>

            <!-- FAQ 8 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">8</span>
                <span class="pt-0.5">{{ t('faqQuestion8') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer8') }}
              </p>
            </div>

            <!-- FAQ 9 -->
            <div class="border-b border-gray-200 dark:border-slate-700 pb-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">9</span>
                <span class="pt-0.5">{{ t('faqQuestion9') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer9') }}
              </p>
            </div>

            <!-- FAQ 10 -->
            <div class="pb-2">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">10</span>
                <span class="pt-0.5">{{ t('faqQuestion10') }}</span>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed ml-11">
                {{ t('faqAnswer10') }}
              </p>
            </div>

          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 class="text-3xl font-bold mb-4">{{ t('faqCTATitle') }}</h2>
          <p class="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            {{ t('faqCTASubtitle') }}
          </p>
          <NuxtLink 
            to="/contato" 
            class="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {{ t('faqCTAButton') }}
          </NuxtLink>
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
  title: 'FAQ - Go Brazil',
  meta: [
    { name: 'description', content: 'Perguntas frequentes sobre viagens ao Brasil.' }
  ]
})
</script>