<template>
  <div>
    <main class="min-h-screen bg-white">
      <!-- Hero Section Elegante com Imagem -->
      <div class="relative overflow-hidden h-[250px]">
        <!-- Imagem de Fundo -->
        <div class="absolute inset-0">
          <img 
            src="/vista-de-um-estadio-de-futebol-vazio-com-fantasia-e-ceu-de-sonho_23-2151563104.jpg" 
            alt="Estádio de futebol"
            class="w-full h-full object-cover"
          />
          <!-- Overlay escuro para melhor legibilidade do texto -->
          <div class="absolute inset-0 bg-black/60"></div>
        </div>
        
        <!-- Conteúdo -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              {{ t('plansTitle') }}
            </h1>
            <p class="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {{ t('plansHeroSubtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Planos Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center mb-16">
          <span class="text-green-600 font-semibold text-sm tracking-wider uppercase">{{ t('plansLabel') }}</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-4 mb-6">
            {{ t('plansMainTitle') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ t('plansSubtitle') }}
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Plano Gratuito -->
          <div class="relative bg-white rounded-lg overflow-hidden shadow-xl border-4 border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <!-- Badge -->
            <div class="absolute top-3 right-3">
              <span class="bg-green-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {{ t('plansFree') }}
              </span>
            </div>
            
            <div class="p-5 lg:p-6 flex flex-col flex-grow">
              <!-- Título del Plan -->
              <div class="mb-4">
                <h3 class="text-xl font-bold text-gray-900 mb-1">
                  {{ t('planFreeTitle') }}
                </h3>
                <p class="text-gray-500 text-xs italic">{{ t('planFreeSubtitle') }}</p>
              </div>
              
              <!-- Precio -->
              <div class="mb-5">
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-green-600">{{ t('planFreePrice') }}</span>
                </div>
                <p class="text-gray-500 text-xs mt-1">{{ t('planFreePriceDesc') }}</p>
              </div>
              
              <!-- Features -->
              <div class="space-y-2.5 mb-5 flex-grow">
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="mdi:check" class="w-3 h-3 text-green-600" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planFreeFeature1') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="mdi:check" class="w-3 h-3 text-green-600" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planFreeFeature2') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="mdi:check" class="w-3 h-3 text-green-600" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planFreeFeature3') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="mdi:check" class="w-3 h-3 text-green-600" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planFreeFeature4') }}</p>
                </div>
              </div>
              
              <!-- CTA Button -->
              <NuxtLink 
                to="/contato" 
                class="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm mt-auto"
              >
                {{ t('planFreeButton') }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Plano Plus -->
          <div class="relative bg-white rounded-lg overflow-hidden shadow-xl border-gradient-gold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <!-- Badge -->
            <div class="absolute top-3 right-3">
              <span class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-lg">
                {{ t('plansPopular') }}
              </span>
            </div>
            
            <!-- Efecto Metalizado -->
            <div class="absolute inset-0 pointer-events-none opacity-20">
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-transparent to-yellow-600/30"></div>
            </div>
            
            <div class="p-5 lg:p-6 relative flex flex-col flex-grow">
              <!-- Título del Plan -->
              <div class="mb-4">
                <h3 class="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-1">
                  {{ t('planPlusTitle') }}
                </h3>
                <p class="text-gray-500 text-xs italic">{{ t('planPlusSubtitle') }}</p>
              </div>
              
              <!-- Precio -->
              <div class="mb-5">
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                    {{ currentLanguage === 'pt' ? 'R$ 30' : 'USD 6' }}
                  </span>
                  <span class="text-gray-500 text-sm">/ {{ t('planMonth') }}</span>
                </div>
                <p class="text-gray-500 text-xs mt-1">{{ t('planPlusPriceDesc') }}</p>
              </div>
              
              <!-- Features -->
              <div class="space-y-2.5 mb-5 flex-grow">
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planPlusFeature1') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planPlusFeature2') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planPlusFeature3') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planPlusFeature4') }}</p>
                </div>
                
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-xs leading-relaxed">{{ t('planPlusFeature5') }}</p>
                </div>
              </div>
              
              <!-- CTA Button -->
              <NuxtLink 
                to="/contato" 
                class="block w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm mt-auto"
              >
                {{ t('planPlusButton') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-gray-50 py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              {{ t('plansFAQTitle') }}
            </h2>
            <p class="text-gray-600">
              {{ t('plansFAQSubtitle') }}
            </p>
          </div>
          
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-md border-2 border-green-500 hover:border-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">{{ t('plansFAQ1Question') }}</h3>
              <p class="text-gray-600">{{ t('plansFAQ1Answer') }}</p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md border-2 border-green-500 hover:border-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">{{ t('plansFAQ2Question') }}</h3>
              <p class="text-gray-600">{{ t('plansFAQ2Answer') }}</p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md border-2 border-green-500 hover:border-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">{{ t('plansFAQ3Question') }}</h3>
              <p class="text-gray-600">{{ t('plansFAQ3Answer') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl overflow-hidden shadow-2xl">
            <div class="p-8 lg:p-12 text-center">
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {{ t('plansCTATitle') }}
              </h2>
              <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {{ t('plansCTASubtitle') }}
              </p>
              <div>
                <NuxtLink 
                  to="/contato" 
                  class="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {{ t('plansCTAButton') }}
                  <Icon name="mdi:arrow-right" class="w-5 h-5" />
                </NuxtLink>
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

const { t, currentLanguage, loadSavedLanguage } = useTranslations()

onMounted(() => {
  loadSavedLanguage()
})

useHead({
  title: 'Planos - Go Brazil',
  meta: [
    { name: 'description', content: 'Conheça nossos planos e escolha o melhor para sua jornada ao Brasil.' }
  ]
})
</script>

<style scoped>
/* Borda dourada metalizada para o Plano Plus - Efeito Cromado */
.border-gradient-gold {
  position: relative;
  border: 5px solid;
  border-image: linear-gradient(135deg, 
    #eab308 0%,
    #f59e0b 20%, 
    #eab308 40%,
    #fbbf24 50%,
    #f59e0b 60%,
    #eab308 80%,
    #ca8a04 100%
  ) 1;
  background-clip: padding-box;
  box-shadow: 
    0 0 30px rgba(234, 179, 8, 0.6),
    inset 0 1px 3px rgba(255, 255, 255, 0.5),
    0 4px 20px rgba(234, 179, 8, 0.4);
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0%, 100% {
    filter: brightness(1) contrast(1);
  }
  50% {
    filter: brightness(1.15) contrast(1.1);
  }
}

.border-gradient-gold:hover {
  box-shadow: 
    0 0 40px rgba(234, 179, 8, 0.8),
    inset 0 1px 3px rgba(255, 255, 255, 0.6),
    0 6px 30px rgba(234, 179, 8, 0.6);
}
</style>