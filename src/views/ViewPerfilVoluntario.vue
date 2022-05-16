<template>
  <div class="view-perfil-ong">
    <PerfilVoluntario msg="Hola perfil ONG"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PerfilVoluntario from '@/components/PerfilVoluntario.vue'

export default {
  name: 'ONGPView',
  components: {
    PerfilVoluntario
  }
}
</script>