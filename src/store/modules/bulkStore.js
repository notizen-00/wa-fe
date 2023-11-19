import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { useAuthStores } from './authStore';
export const useBulkStores = defineStore('bulkStore', {
  state: () => ({
    overlay: false,
    url:import.meta.env.VITE_APP_API_URL,
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
    pesan:[]

  }),
  actions: {
    toggleOverlay(){
        this.overlay = !this.overlay
    },
    async fetchPesan(){
        const response = await axios.get(this.url+'get-message')

        this.pesan = response.data.data.listData
        console.log(response.data.data.listData)
    },
    async pesan_bulk(data){

        const response = await axios.post(this.url+'send-message',{
            to:data.to,
            session:data.session.detail_session,
            text:data.text,
            id_kontak:data.id_kontak
        });
        
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
    getListCard(){
      return this.cardDashboard
    },
    getListPesan(){
      return this.pesan
    }

  },
  persist:true
})
