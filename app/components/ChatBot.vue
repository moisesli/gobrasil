<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Botão flutuante do chatbot -->
    <Transition name="bounce">
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/50 dark:hover:shadow-green-700/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Abrir chat"
      >
        <!-- Ícone de chat -->
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        
        <!-- Badge de notificação -->
        <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </span>

        <!-- Tooltip -->
        <span class="absolute right-full mr-3 px-3 py-1 bg-gray-900 dark:bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Precisa de ajuda?
        </span>
      </button>
    </Transition>

    <!-- Janela do chat -->
    <Transition name="slide-up">
      <div
        v-if="isOpen"
        class="w-96 h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-slate-700"
      >
        <!-- Cabeçalho -->
        <div class="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span class="text-2xl">🤖</span>
              </div>
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 class="text-white font-bold">Assistente Go Brazil</h3>
              <p class="text-green-100 text-xs">Online agora</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <!-- Botão limpar chat -->
            <button
              @click="clearMessages"
              class="p-2 hover:bg-white/20 rounded-lg transition-colors"
              title="Limpar conversa"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
            <!-- Botão fechar -->
            <button
              @click="toggleChat"
              class="p-2 hover:bg-white/20 rounded-lg transition-colors"
              title="Fechar chat"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Área de mensagens -->
        <div
          ref="messagesContainer"
          class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-900"
        >
          <TransitionGroup name="message">
            <div
              v-for="message in messages"
              :key="message.id"
              :class="[
                'flex',
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              ]"
            >
              <div
                :class="[
                  'max-w-[75%] rounded-2xl px-4 py-3 shadow-sm',
                  message.sender === 'user'
                    ? 'bg-green-500 text-white rounded-br-none'
                    : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-slate-700'
                ]"
              >
                <p class="text-sm whitespace-pre-line">{{ message.text }}</p>
                <span
                  :class="[
                    'text-xs mt-1 block',
                    message.sender === 'user' ? 'text-green-100' : 'text-gray-400 dark:text-gray-500'
                  ]"
                >
                  {{ formatTime(message.timestamp) }}
                </span>
              </div>
            </div>
          </TransitionGroup>

          <!-- Indicador de digitação -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200 dark:border-slate-700">
              <div class="flex space-x-2">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sugestões rápidas -->
        <div class="px-4 py-2 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="suggestion in quickSuggestions"
              :key="suggestion"
              @click="sendQuickMessage(suggestion)"
              class="text-xs px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {{ suggestion }}
            </button>
          </div>
        </div>

        <!-- Campo de entrada -->
        <div class="p-4 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
          <form @submit.prevent="handleSend" class="flex space-x-2">
            <input
              v-model="inputMessage"
              type="text"
              placeholder="Digite sua mensagem..."
              class="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button
              type="submit"
              :disabled="!inputMessage.trim()"
              class="px-6 py-3 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useChatbot } from '~/composables/useChatbot'

const { isOpen, messages, toggleChat, sendMessage, clearMessages } = useChatbot()

const inputMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)

const quickSuggestions = ref([
  '📄 Preciso de visto?',
  '💰 Custo de vida?',
  '🏠 Como alugar?',
  '� Trabalho no Brasil?',
  '🏦 Como fazer CPF?',
  '☀️ Melhor época?'
])

const handleSend = () => {
  if (!inputMessage.value.trim()) return
  
  const message = inputMessage.value
  sendMessage(message)
  inputMessage.value = ''
  
  // Simula indicador de digitação
  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
  }, 1000)
}

const sendQuickMessage = (message) => {
  inputMessage.value = message
  handleSend()
}

const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

// Auto-scroll para a última mensagem
watch(messages, async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}, { deep: true })
</script>

<style scoped>
/* Animações */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.3s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.message-enter-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

/* Scrollbar customizada */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background: #475569;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
</style>
