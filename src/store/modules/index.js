// src/store/modules/index.js

import { useAuthStores } from './authStore'
import { useOverlayStores } from './overlayStore'
import { useDashboardStores } from './dashboardStore'
import { usePesanStores } from './pesanStore'
import { useKontakStores } from './kontakStore'
import { useBulkStores } from './bulkStore'

// Impor modul-modul lain jika ada

export function useStore() {
  return {
    authStore:useAuthStores(),
    overlayStore:useOverlayStores(),
    dashboardStore:useDashboardStores(),
    pesanStore:usePesanStores(),
    kontakStore:useKontakStores(),
    bulkStore:useBulkStores()
    // Masukkan modul-modul lain di sini jika ada
  }
}
