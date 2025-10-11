import { ref, watch } from 'vue'
import { useTranslations } from './useTranslations'
import { chatbotResponses } from './chatbotResponses'

export const useChatbot = () => {
  const { currentLanguage } = useTranslations()
  const isOpen = ref(false)
  
  // Mensagem inicial baseada no idioma
  const getInitialMessage = () => {
    const welcomeMessages = {
      pt: 'Olá! 👋 Sou o assistente virtual da Go Brazil. Como posso ajudar você hoje?',
      en: 'Hello! 👋 I\'m the Go Brazil virtual assistant. How can I help you today?',
      es: '¡Hola! 👋 Soy el asistente virtual de Go Brazil. ¿Cómo puedo ayudarte hoy?'
    }
    return welcomeMessages[currentLanguage.value] || welcomeMessages.pt
  }

  const messages = ref([
    {
      id: 1,
      text: getInitialMessage(),
      sender: 'bot',
      timestamp: new Date()
    }
  ])

  // Atualiza mensagem de boas-vindas quando o idioma mudar
  watch(currentLanguage, () => {
    if (messages.value.length === 1 && messages.value[0].sender === 'bot') {
      messages.value[0].text = getInitialMessage()
    }
  })

  // Detecta o idioma da mensagem do usuário
  const detectLanguage = (text) => {
    const message = text.toLowerCase()
    
    // Palavras-chave em português
    const ptKeywords = ['você', 'está', 'obrigado', 'por favor', 'também', 'então', 'não', 'sim', 'oi', 'olá', 'português']
    // Palavras-chave em espanhol
    const esKeywords = ['usted', 'está', 'gracias', 'por favor', 'también', 'entonces', 'sí', 'hola', 'español', 'cuánto']
    // Palavras-chave em inglês
    const enKeywords = ['you', 'are', 'thank', 'please', 'also', 'then', 'yes', 'hello', 'hi', 'how', 'what']
    
    let ptScore = 0
    let esScore = 0
    let enScore = 0
    
    ptKeywords.forEach(keyword => { if (message.includes(keyword)) ptScore++ })
    esKeywords.forEach(keyword => { if (message.includes(keyword)) esScore++ })
    enKeywords.forEach(keyword => { if (message.includes(keyword)) enScore++ })
    
    // Se não detectou, usa o idioma atual do site
    if (ptScore === 0 && esScore === 0 && enScore === 0) {
      return currentLanguage.value
    }
    
    // Retorna o idioma com maior pontuação
    if (ptScore >= esScore && ptScore >= enScore) return 'pt'
    if (esScore >= ptScore && esScore >= enScore) return 'es'
    return 'en'
  }

  // Função para encontrar a melhor resposta
  const findBestResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim()
    const lang = detectLanguage(message)
    
    // Verifica cada categoria
    for (const [category, data] of Object.entries(chatbotResponses)) {
      if (category === 'default') continue
      
      // Verifica padrões no idioma detectado
      const patterns = data.patterns[lang] || data.patterns.pt
      for (const pattern of patterns) {
        if (message.includes(pattern)) {
          // Se a resposta é array, pega aleatoriamente
          const responses = data.responses[lang] || data.responses.pt
          if (Array.isArray(responses)) {
            return responses[Math.floor(Math.random() * responses.length)]
          }
          return responses
        }
      }
      
      // Se não encontrou no idioma detectado, tenta nos outros idiomas
      for (const otherLang of ['pt', 'en', 'es']) {
        if (otherLang === lang) continue
        const patterns = data.patterns[otherLang]
        if (patterns) {
          for (const pattern of patterns) {
            if (message.includes(pattern)) {
              const responses = data.responses[lang] || data.responses.pt
              if (Array.isArray(responses)) {
                return responses[Math.floor(Math.random() * responses.length)]
              }
              return responses
            }
          }
        }
      }
    }

    // Resposta padrão no idioma detectado
    return chatbotResponses.default.responses[lang] || chatbotResponses.default.responses.pt
  }

  const toggleChat = () => {
    isOpen.value = !isOpen.value
  }

  const sendMessage = (text) => {
    if (!text.trim()) return

    // Adiciona mensagem do usuário
    const userMessage = {
      id: messages.value.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    }
    messages.value.push(userMessage)

    // Simula digitação do bot
    setTimeout(() => {
      const botResponse = {
        id: messages.value.length + 1,
        text: findBestResponse(text),
        sender: 'bot',
        timestamp: new Date()
      }
      messages.value.push(botResponse)
    }, 1000)
  }

  const clearMessages = () => {
    messages.value = [
      {
        id: 1,
        text: getInitialMessage(),
        sender: 'bot',
        timestamp: new Date()
      }
    ]
  }

  return {
    isOpen,
    messages,
    toggleChat,
    sendMessage,
    clearMessages
  }
}
