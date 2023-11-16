// src/store/modules/index.js

import { useAuthStores } from './authStore'
import { useOverlayStores } from './overlayStore'


// Impor modul-modul lain jika ada

export function useStore() {
  return {
    authStore:useAuthStores(),
    overlayStore:useOverlayStores(),
   
    // Masukkan modul-modul lain di sini jika ada
  }
}
