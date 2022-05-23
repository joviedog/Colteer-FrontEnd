<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input v-model="data.name" class="form-control" placeholder="Name" required>
    <br>
    <input v-model="data.username" class="form-control" placeholder="Username" required>
    <br>
    <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>
    <br>
    <input v-model="data.phone" class="form-control" placeholder="Phone" required>
    <br>
    <input v-model="data.document" class="form-control" placeholder="Document" required>
    <br>
    <input v-model="data.birthday" class="form-control" placeholder="Type of Organization" required>
    <br>
    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
    <br>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
  import flatPicker from "vue-flatpickr-component";
  import "flatpickr/dist/flatpickr.css";
  import axios from 'axios';


let fechaActual = new Date();

export default {
    data() {
        return {
            dates: {
            simple: fechaActual.toISOString().split('T')[0] //Esto es para el calendario
            //Tiene que agregar las demas variables para los otros campos
        },
         name: '',
         username: '',
         email: '',
         phone: '',
         document: '',
         org_type: '',
         password: ''     
        };
    },
    methods: {
        async handleSubmit(){
            await axios.post('http://localhost:8000/api/auth/register_organization',{
                name:this.name,
                username:this.username,
                email:this.email,
                phone:this.phone,
                document:this.document,
                org_type:this.org_type,
            });
            this.$router.push('/login');
        },
        registrarVoluntario() {
            console.log("Usuario registrado");
        }
    },
    components: { flatPicker }
};
</script>
