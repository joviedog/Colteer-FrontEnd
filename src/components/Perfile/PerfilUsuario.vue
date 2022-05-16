<template>
  <div class="view-perfil-ong">
    <v-container>
      <v-content><PerfilBarra1/>
      
      </v-content>

    </v-container>

  </div>
</template>
 

<script>
// @ is an alias to /src
import PerfilBarra1 from '@/components/Perfil/PerfilBarra1.vue'


export default {
  name: 'PUView',
  components: {
    PerfilBarra1
  }
}
</script>