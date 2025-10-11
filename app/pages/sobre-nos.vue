<template>
  <div>
    <main class="min-h-screen bg-white">
      <!-- Hero Section Elegante com Imagem -->
      <div class="relative overflow-hidden h-[250px]">
        <!-- Imagem de Fundo -->
        <div class="absolute inset-0">
          <img 
            src="/bandera-brasil_1401-76.jpg" 
            alt="Bandeira do Brasil"
            class="w-full h-full object-cover"
          />
          <!-- Overlay escuro para melhor legibilidade do texto -->
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        
        <!-- Conteúdo -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              {{ t('aboutTitle') }}
            </h1>
            <p class="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {{ t('aboutHeroSubtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Missão e Visão -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Texto -->
          <div>
            <div class="mb-6">
              <span class="text-green-600 font-semibold text-sm tracking-wider uppercase">{{ t('aboutMissionLabel') }}</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {{ t('aboutMissionTitle') }}
            </h2>
            <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                {{ t('aboutText1') }}
              </p>
              <p>
                {{ t('aboutText2') }}
              </p>
            </div>
          </div>
          
          <!-- Imagem/Placeholder -->
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/ChatGPT Image 3 de out. de 2025, 00_57_12.png" 
                alt="Brasil" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 w-72 h-72 bg-green-600/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      <!-- Nossos Serviços -->
      <div class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="text-green-600 font-semibold text-sm tracking-wider uppercase">{{ t('aboutServicesLabel') }}</span>
            <h2 class="text-4xl font-bold text-gray-900 mt-4 mb-6">
              {{ t('aboutFindHere') }}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {{ t('aboutServicesSubtitle') }}
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Serviço 1 -->
            <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-green-500 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:passport" class="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('aboutServiceDoc') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ t('aboutVisa') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Serviço 2 -->
            <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-green-500 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:map-marker-path" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('aboutServiceDest') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ t('aboutDestinations') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Serviço 3 -->
            <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-green-500 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:home-city-outline" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('aboutServiceCost') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ t('aboutLiving') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Serviço 4 -->
            <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-green-500 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:chat-question-outline" class="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('aboutServiceConsult') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ t('aboutQuestions') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Serviço 5 -->
            <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-green-500 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:star-outline" class="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('aboutServiceRec') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ t('aboutRecommendations') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Serviço 6 -->
            <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-green-500 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:headset" class="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('aboutServiceSupport') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ t('aboutServiceSupportDesc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl overflow-hidden shadow-2xl">
            <div class="grid lg:grid-cols-2 gap-0">
              <!-- Texto -->
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {{ t('aboutConclusion') }}
                </h2>
                <p class="text-xl text-white/90 mb-8">
                  {{ t('aboutCTA') }}
                </p>
                <div>
                  <NuxtLink 
                    to="/contato" 
                    class="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {{ t('aboutContactButton') }}
                    <Icon name="mdi:arrow-right" class="w-5 h-5" />
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Estatísticas -->
              <div class="bg-green-800/80 p-8 lg:p-12 flex items-center">
                <div class="grid grid-cols-2 gap-6 w-full">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">500+</div>
                    <div class="text-white/80 text-xs">{{ t('aboutStat1') }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">2</div>
                    <div class="text-white/80 text-xs">{{ t('aboutStat2') }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">24/7</div>
                    <div class="text-white/80 text-xs">{{ t('aboutStat3') }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">100%</div>
                    <div class="text-white/80 text-xs">{{ t('aboutStat4') }}</div>
                  </div>
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
  title: 'Sobre Nós - Go Brazil',
  meta: [
    { name: 'description', content: 'Conheça mais sobre a Go Brazil e nossa missão de ajudar estrangeiros a descobrir o Brasil.' }
  ]
})
</script>