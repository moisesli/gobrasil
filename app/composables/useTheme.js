import { ref, watch } from 'vue'

// Estado global do tema
const isDarkMode = ref(false)

export const useTheme = () => {
  // Função para alternar tema
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    applyTheme()
    saveTheme()
  }

  // Aplicar tema ao documento
  const applyTheme = () => {
    if (process.client) {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // Salvar preferência no localStorage
  const saveTheme = () => {
    if (process.client) {
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    }
  }

  // Carregar tema salvo
  const loadSavedTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        isDarkMode.value = true
      } else {
        isDarkMode.value = false
      }
      
      applyTheme()
    }
  }

  return {
    isDarkMode,
    toggleTheme,
    loadSavedTheme
  }
}
