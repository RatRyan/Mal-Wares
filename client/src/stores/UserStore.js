import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      count: 0,
      loggedIn: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }
    }
  },
  actions: {
    async registerAccount(firstName, lastName, email, password) {
      const res = await axios.post("localhost:3000/account/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      console.log(await res.data)
      this.loggedIn = true;
      router.push("/")
    },
    loginAccount(email, password) {
      
    },
    logout() {
      this.user = null
    }
  }
})