import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            loggedIn: false,
            firstName: '',
        };
    },
    actions: {
        async registerAccount(firstName, lastName, email, password) {
            const res = await axios.post(
                'http://localhost:3000/account/register',
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                }
            );
            if (res.status != 200) {
                return
            }
            this.firstName = res.data.firstName;
            this.loggedIn = true;
            router.push('/');
        },

        async login(email, password) {
            const res = await axios.post(
                'http://localhost:3000/account/login',
                {
                    email: email,
                    password: password,
                }
            );
            this.firstName = res.data.firstName;
            this.loggedIn = true;
            router.push('/');
        },

        logout() {
            this.firstName = '';
            this.loggedIn = false;
            router.push('/login');
        },
    },
});
