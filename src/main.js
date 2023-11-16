import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router';
import { pinia } from './store/pinia'
import { useStore } from '@/Store/modules'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myLight = {
    dark: false,
    colors: {
      background: '#a6958f',
      surface: '#FFFFFF',
      primary: '#6200EE',
      'primary-darken-1': '#3700B3',
      secondary: '#03DAC6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      something:'#eb6434'
    },
  }
  
  const myDark = {
    dark: true,
    colors: {
      something: '#eb6434', 
      
    },
  }
  
  
  const vuetify = createVuetify({
    components:{
      ...components,
      ...directives,
    
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        myLight,
        dark: {
          ...myDark.colors, 
        },
          
      },
    },
  })

createApp(App)

        .use(vuetify)
        .use(router)
        .use(pinia)
        .provide('store', useStore())
        .mount('#app')