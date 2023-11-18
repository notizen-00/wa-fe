import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { useDashboardStores } from './dashboardStore';

export const useAuthStores = defineStore('authStore', {
  state: () => ({
    login: false,
    token:'', 
    username:'',
    userId:'',
    apiUrl:import.meta.env.VITE_APP_API_URL,
    error:'',
    listKoneksi:[],
    totalKoneksi:'',
    qr:'',
    webSocket: null

  }),
  actions: {

    async connectWebSocket() {
      try {
        // Establish WebSocket connection
        const wsUrl = 'wss://wa.oxva.eu.org';
        this.webSocket = new WebSocket(wsUrl);

        // WebSocket event listeners
        this.webSocket.addEventListener('open', (event) => {
          console.log('WebSocket connection opened:', event);
        });

        this.webSocket.addEventListener('message', (event) => {
          try {
            const parsedMessage = JSON.parse(event.data);
        
            if (parsedMessage.type === 'connection') {
              console.log('Connection message received:', parsedMessage.message);
              this.qr = ''
              useDashboardStores().toggleOverlay()
              window.location.reload();
            } else {
              console.log('WebSocket message received:', parsedMessage);
            }
          } catch (error) {
            console.error('Error parsing incoming message:', error);
          }
       
          // Handle WebSocket messages as needed
        });

        this.webSocket.addEventListener('close', (event) => {
          console.log('WebSocket connection closed:', event);
        });

        this.webSocket.addEventListener('error', (event) => {
          console.error('WebSocket error:', event);
        });
      } catch (error) {
        console.error('Error connecting to WebSocket:', error);
      }
    },
    async fetchListKoneksi(){
        try {
      
            const response = await axios.get(this.apiUrl+'sessions?key=mysupersecretkey');
           
            if (response.status === 200) {
              // alert('Berhasil login');
              console.log(response.data)

              this.listKoneksi = response.data;
              this.totalKoneksi = response.data.data.length
             
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
    async generateSession(value){


      if(value === ''){

        alert('isikan nama session');
      }else{

        try {
    
        const response = await axios.get(this.apiUrl+'start-session?session='+value+'&scan=true');
       
        if (response.status === 200) {
          // alert('Berhasil di generate');
         

          this.qr = response.data.data.qr;
          console.log(this.qr)
        } else {
          alert('Login gagal');
        }
      } catch (error) {
        // alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
        console.error(error);
    
        this.error = 'Terjadi Kesalahan . Periksa kembali email dan password Anda';
        
       
      }
       
      }
      

    },
    async deleteSession(value){
      try {
      
        const response = await axios.get(this.apiUrl+'delete-session?session='+value);
       
        if (response.status === 200) {
          alert('Berhasil Delete');  
          window.location.reload()
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
    getQr()
    {
        return this.qr
    },
    getListKoneksi()
    {
      return this.listKoneksi
    },
    TotalListKoneksi()
    {
      return this.totalKoneksi
    }

  },
  persist:true
})
