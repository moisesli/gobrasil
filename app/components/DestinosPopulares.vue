<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {{ t('popularDestinationsTitle') }}
        </h2>
      </div>

      <!-- Destinations Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Rio de Janeiro -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden">
            <img src="/1022794-rj-31052016-dsc2843-tania-rego-agencia-brasil-a.png" 
                 alt="Rio de Janeiro" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Rio de Janeiro</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('rioDescription') }}
            </p>
          </div>
        </div>

        <!-- São Paulo -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden">
            <img src="/istockphoto-1166728645-612x612.jpg" 
                 alt="São Paulo" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">São Paulo</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('saoPauloDescription') }}
            </p>
          </div>
        </div>

        <!-- Salvador -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden">
            <img src="/pelourinho.jpg" 
                 alt="Salvador" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Salvador</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('salvadorDescription') }}
            </p>
          </div>
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