import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'

export const useAlertStores = defineStore('alertStore', {
  state: () => ({
    overlay: false,
   

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

  },
  persist:true
})
