import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'


export const useAuthStores = defineStore('authStore', {
  state: () => ({
    login: false,
    token:'', 
    username:'',
    userId:'',
    apiUrl:import.meta.env.VITE_APP_API_URL,
    error:''

  }),
  actions: {
    async getListKoneksi(){
        try {
      
            const response = await axios.get(this.apiUrl+'sessions?key=mysupersecretkey');
           
            if (response.status === 200) {
              // alert('Berhasil login');
              console.log(response.data)
              router.push('/')
            } else {
              alert('Login gagal');
            }
          } catch (error) {
            // alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
            console.error(error);
        
            this.error = 'Terjadi Kesalahan . Periksa kembali email dan password Anda';
            
           
          }
    },
    async doLogin(data) {
      try {
      
        const response = await axios.post(this.apiUrl+'apis/login', {
          email: data.email,
          password: data.password,
        });
       
        if (response.status === 200) {
          // alert('Berhasil login');

        
          this.login = true;
          this.userId = response.data.data.userId;
          this.token = response.data.data.token;
          this.username = response.data.data.name;

          console.log(this.token);
          console.log(this.userId);
          console.log(this.username);
          router.push('/')
        } else {
          alert('Login gagal');
        }
      } catch (error) {
        // alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
        console.error(error);
      
        Toast.show({
          text: 'Hello!',
        });
        showHelloToast();


        this.error = 'Terjadi Kesalahan . Periksa kembali email dan password Anda';
        
       
      }
    },
    async doLogout() {
      try {
        const response = await axios.post(this.apiUrl+'api/logout', null, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
    
        if (response.status === 200) {
          alert('Berhasil logout');
          this.login = false;
          this.token = '';
          router.push('/login')

        } else {
          alert('Logout gagal');
        }
      } catch (error) {
        console.error(error);
        alert('Logout gagals')
      
      }
    }
    

  },
  getters: {
    isLogin() {
      return this.login
    },
    getToken(){
        return this.token
    },
    getError(){
        return this.error
    },
    getUserId()
    {
        return this.userId
    },
    getUsername()
    {
      return this.username
    }

  },
  persist:true
})
