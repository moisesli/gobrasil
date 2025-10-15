export const useAuth = () => {
  const user = useState('user', () => null)
  const isAuthenticated = computed(() => !!user.value)

  // Carregar usuário do localStorage ao iniciar
  const loadUser = () => {
    if (process.client) {
      const savedUser = localStorage.getItem('gobrasil_user')
      if (savedUser) {
        user.value = JSON.parse(savedUser)
      }
    }
  }

  // Salvar usuário logado
  const setUser = (userData) => {
    user.value = userData
    if (process.client) {
      localStorage.setItem('gobrasil_user', JSON.stringify(userData))
    }
  }

  // Fazer logout
  const logout = () => {
    user.value = null
    if (process.client) {
      localStorage.removeItem('gobrasil_user')
    }
  }

  // Atualizar dados do usuário
  const updateUser = (newData) => {
    user.value = { ...user.value, ...newData }
    if (process.client) {
      localStorage.setItem('gobrasil_user', JSON.stringify(user.value))
    }
  }

  return {
    user: readonly(user),
    isAuthenticated,
    setUser,
    logout,
    updateUser,
    loadUser
  }
}
