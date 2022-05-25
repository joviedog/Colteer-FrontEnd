<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h4>Regístrate como Voluntario</h4>
                            </div>
                            <form v-on:submit.prevent="registrarVoluntario">
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Nombre</h6>
                                    <input alternative class="form-control" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Usuario</h6> <!-- Cambie los placeholder-->
                                    <input alternative class="form-control" placeholder="Username" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Correo</h6>
                                    <input alternative class="form-control" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Teléfono</h6>
                                    <input alternative class="form-control" placeholder="Phone" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Documento de Identidad</h6>
                                    <input alternative class="form-control" placeholder="Document" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">tiipo de organizacion</h6>
                                    <input class="form-control" alternative type="form-control" placeholder="Organization Type" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Contraseña</h6>
                                    <input class="form-control" alternative type="password" placeholder="Password"
                                        required>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary"
                                        id="btnRegistrarVoluntario">Registrarse</button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
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
