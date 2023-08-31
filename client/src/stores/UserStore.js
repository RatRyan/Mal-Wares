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

    errorText: "",
  }),
  getters: {
    cartLength: (state) => state.cart.length,
    totalCartPrice: (state) => state.cart.reduce((total, item) => total + item.price, 0).toFixed(2),
  },
  actions: {
    async registerAccount(firstName, lastName, email, password) {
      const emailRegex = /.*?@.*?\..*?/;
      const passwordRegex = /(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)(?=.*[-#$\.\\%&*!@\/\^\(\)\+\=\{\}\[\|\<\>\?\'\"\:\;\`\~\,].*).{8}.*/;

      if (
        email.match(emailRegex) && 
        password.match(passwordRegex) &&
        firstName.match(/.+/) &&
        lastName.match(/.+/)
      ) {
        try{
          const res = await axios.post('http://localhost:3000/account/register', {
            firstName,
            lastName,
            email,
            password,
          });

          if (res.status === 200) {
            await this.login(email, password);
          }
        } catch {
          this.errorText = "Email must be unique"
        }
      } else {
        this.errorText = "Validation failed";
      }
    },

    async login(email, password) {
      try {
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
      } catch (e){
        this.errorText = "Invalid credentials";
      }
    },

    logout() {
      this.loggedIn = false;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.cart = [];
      this.orders = [];
      this.isAdmin = false;
      router.push('/login');
    },

    async addToCart(product) {
      this.cart.push(product);

      await axios.post('http://localhost:3000/cart', {
        email: this.email,
        cart: this.cart,
      });

      const res = await axios.post('http://localhost:3000/cart', {
        email: this.email,
      });
      console.log(res.data);
    },

    async removeItem(index) {
      this.cart.splice(index, 1);
      await axios.post('http://localhost:3000/cart', {
        email: this.email,
        cart: this.cart,
      });
    },

    async checkout() {
      this.cart = []

      await axios.post('http://localhost:3000/cart', {
        email: this.email,
        cart: this.cart,
      });

      const res = await axios.get('http://localhost:3000/cart', {
        email: this.email,
      });
    }
  },
});
