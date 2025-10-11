<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {{ t('planTripTitle') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ t('planTripSubtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Suporte via Chatbot -->
        <div class="text-center group">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 shadow-sm" style="background-color: #bbf7d0 !important;">
            <Icon name="mdi:chat" class="w-8 h-8 !text-green-600" style="color: #16a34a !important;" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ t('chatbotSupportTitle') }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ t('chatbotSupportDescription') }}
          </p>
        </div>

        <!-- Assessoria Personalizada -->
        <div class="text-center group">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 shadow-sm" style="background-color: #bbf7d0 !important;">
            <Icon name="mdi:account-tie" class="w-8 h-8 !text-green-600" style="color: #16a34a !important;" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ t('personalizedAdviceTitle') }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ t('personalizedAdviceDescription') }}
          </p>
        </div>

        <!-- Guia de Destinos -->
        <div class="text-center group">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 shadow-sm" style="background-color: #bbf7d0 !important;">
            <Icon name="mdi:map-marker" class="w-8 h-8 !text-green-600" style="color: #16a34a !important;" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ t('destinationGuideTitle') }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ t('destinationGuideDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'

const { t, loadSavedLanguage } = useTranslations()

// Carregar idioma salvo quando o componente for montado
onMounted(() => {
  loadSavedLanguage()
})
</script>