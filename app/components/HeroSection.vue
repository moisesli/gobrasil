<template>
  <section class="relative h-screen flex items-center justify-center text-white">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full bg-gradient-to-b from-blue-900/30 to-blue-900/45 relative">
        <!-- Background Image: Nova imagem do Brasil -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style="background-image: url('/ChatGPT Image 15 de set. de 2025, 22_20_03.png');">
        </div>
        <div class="absolute inset-0 bg-blue-900/25"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        {{ t('heroTitle') }}
      </h1>
      
      <p class="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
        {{ t('heroSubtitle') }}
      </p>
      
      <button 
        @click="openLoginModal"
        class="font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white" 
        style="background-color: #16a34a !important; border: none !important; opacity: 1 !important;">
        {{ t('heroButton') }}
      </button>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <Icon name="mdi:chevron-down" class="w-8 h-8 text-white opacity-75" />
    </div>
  </section>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'
import { useLoginModal } from '~/composables/useLoginModal'

const { t, loadSavedLanguage } = useTranslations()
const { openLoginModal } = useLoginModal()

// Carregar idioma salvo quando o componente for montado
onMounted(() => {
  loadSavedLanguage()
})
</script>