import { ref } from 'vue'

const isLoginModalOpen = ref(false)

export const useLoginModal = () => {
  const openLoginModal = () => {
    isLoginModalOpen.value = true
  }

  const closeLoginModal = () => {
    isLoginModalOpen.value = false
  }

  return {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal
  }
}
