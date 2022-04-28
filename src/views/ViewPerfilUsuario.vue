<template>
  <div class="view-perfil-user">
  <v-container>
    <PerfilUsuario msg="Hola perfil Usuario"/>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PerfilUsuario from '@/components/PerfilUsuario.vue'
//import CabeceraColteer from '@/components/Colteer/CabeceraColteer.vue'
//import PieDePaginaColteer from '@/components/Colteer/PieDePagina.vue'
export default {
  name: 'UPView',
  components: {
    PerfilUsuario,
 
  }
}


</script>