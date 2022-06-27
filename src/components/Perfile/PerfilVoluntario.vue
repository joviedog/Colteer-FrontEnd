<template>
  <v-container>
    <v-app-bar color="#B7DF69">
      <v-toolbar color="#B7DF69">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-btn color="#B388FF">Nombre de usuario</v-btn>
        <v-spacer></v-spacer>
        <v-flex>
          <v-btn color="#B388FF">Inicio</v-btn>
          <v-btn color="#A7E0F4">Cerrar sesión</v-btn>
        </v-flex>
      </v-toolbar>
    </v-app-bar>

    <v-flex md9></v-flex>

    <v-content md25>
      <v-toolbar dense elevation="4">
         <v-tabs align-with-title>
          <v-tab @click="general = true ;calendario= false ; verong= false">General</v-tab>
          <v-tab @click="calendario= true ; general = false ; verong= false">Calendario</v-tab>
          <v-tab @click="verong= true ; general = false ; verong= false">Ver ONG'S</v-tab>
          <v-spacer></v-spacer>
          <v-tab>Mas</v-tab>
          
        </v-tabs>

      </v-toolbar>
      <v-container>
        <GeneralVoluntario v-if="general"/>
        <CalendarioPerfil v-if="calendario"/>
        <SerVoluntarioPefil v-if="verong"/>
      </v-container>|
      
    </v-content>
        
  </v-container>
</template>

<script>

import GeneralVoluntario from '@/components/Perfil/GeneralVoluntario.vue'
import CalendarioPerfil from '@/components/Perfil/CalendarioPerfil.vue'
import SerVoluntarioPefil from '@/components/Perfil/SerVoluntarioPefil.vue'

export default {
  components: { GeneralVoluntario,  CalendarioPerfil,  SerVoluntarioPefil},
  name: 'PerfilBarra',
  data() {
    return{
      general:true,
      calendario:false,
      verong:false
    }
  }

}
</script>

<style>

</style>