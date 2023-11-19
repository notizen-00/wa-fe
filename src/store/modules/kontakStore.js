import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { useAuthStores } from './authStore';
export const useKontakStores = defineStore('kontakStore', {
  state: () => ({
    overlay: false,
    dialog:false,
    url:import.meta.env.VITE_APP_API_URL,
    listKontak:[],
    cardDashboard: [
        {
          title: 'Device',
          jumlah: useAuthStores().TotalListKoneksi,
          icon: 'fa-duotone fa-mobile',
        },
        {
          title: 'Pesan',
          jumlah: useAuthStores().TotalListKoneksi,
          icon: 'fa-duotone fa-comments',
        },
        {
          title: 'Kontak',
          jumlah: 34,
          icon: 'fa-duotone fa-users',
        },
      ],

  }),
  actions: {
    toggleOverlay(){
        this.overlay = !this.overlay
    },
    toggleDialog(){
        this.dialog = !this.dialog
    },
    async fetchKontak(){
        const response = await axios.get(this.url+'get-kontak');

        this.listKontak = response.data.data

        console.log(response.data.data.data)
    },
    async saveKontak(data){

        const response = await axios.post(this.url+'save-kontak',{
            nama:data.nama,
            no_hp:data.no_hp
        });
        // console.log(response.data.data.status)
        if(response.data.data.status == 1){
          alert('selamat')
          this.overlay = false;
          window.location.reload();
        }
    }
    ,
    async importKontak(file){

        try {
            const formData = new FormData();
            formData.append('csvFile', file[0]); 
    
            const response = await axios.post(`${this.url}import-kontak`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
    
            if (response.data.status === 1) {
              alert('Import successful');
              this.toggleDialog(); // Close the import dialog or perform any other actions
              this.fetchKontak(); // Refresh the contact list after importing
              window.location.reload();
            } else {
              alert('Import Succecssful');
              this.toggleDialog(); 
              this.fetchKontak();
            window.location.reload();
            }
          } catch (error) {
            console.error('Error importing contacts:', error);
            alert('Import failed. Check the console for details.');
          }
        
    }
    ,
    async deleteKontak(id){

        const response = await axios.get(this.url+'delete-kontak',{
            id:id
        });
        // console.log(response.data.data.status)
        if(response.data.data.status == 1){
          alert('selamat')
          this.overlay = false;
        }
    }

  },
  getters: {
    isOverlayActive() {
      return this.overlay
    },
    isDialogActive() {
        return this.dialog
      },
    getListCard(){
      return this.cardDashboard
    },
    getListKontak(){
        return this.listKontak
    }

  },
  persist:true
})
