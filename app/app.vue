<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Chatbot global -->
    <ChatBot />
  </NuxtLayout>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'
import ChatBot from '~/components/ChatBot.vue'

const { loadSavedTheme } = useTheme()

// Carregar tema salvo na inicialização
onMounted(() => {
  loadSavedTheme()
})
</script>
