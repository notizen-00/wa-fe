import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { useAuthStores } from './authStore';
export const usePesanStores = defineStore('pesanStore', {
  state: () => ({
    overlay: false,
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
    }
    

  },
  getters: {
    isOverlayActive() {
      return this.overlay
    },
    getListCard(){
      return this.cardDashboard
    }

  },
  persist:true
})
