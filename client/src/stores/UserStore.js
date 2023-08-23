import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';
import { ref } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      loggedIn: false,
      firstName: ref(''),
      lastName: '',
      email: '',
      password: '',
    };
  },
  actions: {
    async registerAccount(firstName, lastName, email, password) {
      const res = await axios.post('http://localhost:3000/account/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      this.firstName = firstName;
      this.loggedIn = true;

      router.push('/');
    },
    async loginAccount(email, password) {},
    logout() {
      this.loggedIn = false;
      router.push('/login')
    },
  },
});
