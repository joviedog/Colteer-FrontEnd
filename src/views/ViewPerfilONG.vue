<template>
  <div class="view-perfil-ong">
  
    <PerfilONG msg="Hola perfil ONG"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PerfilONG from '@/components/PerfilONG.vue'

export default {
  name: 'ONGPView',
  components: {
    PerfilONG
  }
}
</script>