<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import {ref,inject} from 'vue'
import {storeToRefs} from 'pinia'

const store = inject('store')
const {IsSnackbarActive,getText,getTimeout} = storeToRefs(store.alertStore)

  const snackbar = ref(false)
  const text = ref(false)
  const timeout = ref(false)
</script>