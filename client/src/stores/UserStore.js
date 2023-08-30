import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    cart: [],
    orders: [],
    isAdmin: false,
  }),
  getters: {
    cartSize: (state) => state.cart.length
  },
  actions: {
    async registerAccount(firstName, lastName, email, password) {
      const res = await axios.post('http://localhost:3000/account/register', {
        firstName,
        lastName,
        email,
        password,
      });

      if (res.status === 200) {
        await this.login(email, password);
      }
    },

    async login(email, password) {
      const res = await axios.post('http://localhost:3000/account/login', {
        email,
        password,
      });

      if (res.status === 200) {
        this.loggedIn = true;
        this.firstName = res.data.firstName;
        this.lastName = res.data.lastName;
        this.email = res.data.email;
        this.cart = res.data.cart;
        this.orders = res.data.orders;
        this.isAdmin = res.data.isAdmin;
        router.push('/');
      }
    },

    logout() {
      this.loggedIn = false;
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.cart = []
      this.orders = []
      this.isAdmin = false;
      router.push('/login');
    },
  },
});
