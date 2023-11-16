<template>
    <v-layout>
       <SideBar></SideBar>
       <NavBar></NavBar>
       
      <v-main style="height: 250px" class="mt-5">
    
        <div class="m-5">
        <slot name="header">
    
        </slot>
        <slot name="breadcrumbs">
          
        </slot>
        </div>
        <v-container>
            <slot name="content">
    
            </slot>
        </v-container>
       
      </v-main>
    </v-layout>
    </template>
    <script setup>
    
    import SideBar from '@/layouts/partial/Sidebar.vue'
    import NavBar from '@/layouts/partial/Navbar.vue'
    
    </script>