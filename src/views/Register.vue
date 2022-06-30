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
        <base-alert type="success" dismissible v-if="this.creacionExitosa">
            <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
            <span class="alert-inner--text"><strong>¡Listo! </strong> Te has registrado correctamente</span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </base-alert>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h4>Regístrate como Voluntario</h4>
                            </div>
                            <form v-on:submit.prevent="handleSubmit">
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
                                    <h6 for="inputNombreSesion">Fecha de Nacimiento</h6>
                                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                                        <flat-picker slot-scope="{focus, blur}" @on-open="focus" @on-close="blur"
                                            :config="{ allowInput: true }"
                                            class="form-control datepicker" v-model="dates.simple">
                                        </flat-picker>
                                    </base-input>
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
            document: '',
            phone: '',
            birthday: '',
            password: '',
            creacionExitosa: false,
        };
    },
    methods: {
        async handleSubmit() {
            await axios.post('https://colteerbe.herokuapp.com/api/auth/register_volunteer', {
                name: this.name,
                username: this.username,
                email: this.email,
                document: this.document,
                phone: this.phone,
                birthday: this.birthday,
                password: this.password,
            });
            this.$router.push('/login');
        },
    },
    components: { flatPicker }
};
</script>
<style>
</style>
