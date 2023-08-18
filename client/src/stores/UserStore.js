import { defineStore } from 'pinia'
import router from '../router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      count: 0,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }
    }
  },
  actions: {
    registerAccount(firstName, lastName, email) {
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      router.push("/")
    },
    loginAccount(email, password) {
      
    },
    logout() {
      this.user = null
    }
  }
})