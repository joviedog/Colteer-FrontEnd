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
        <base-alert type="danger" dismissible v-if="this.errorInicioSesion">
            <span class="alert-inner--icon"><i class="fa fa-exclamation-triangle"></i></span>
            <span class="alert-inner--text"><strong>¡Error!</strong> Usuario o contraseña incorrectas</span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </base-alert>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h3>Iniciar Sesión</h3>
                            </div>
                            <form v-on:submit.prevent="iniciarSesion">
                                <div class="form-group">
                                    <input alternative class="form-control" placeholder="Email" v-model="email"
                                        required>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" alternative type="password" placeholder="Password"
                                        v-model="password" required>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary" id="btnIniciarSesion">Log In</button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#/register" class="text-light">
                                <small>Crea una nueva cuenta (voluntario)</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#/registerOrganization" class="text-light">
                                <small>Crea una nueva cuenta (entidad)</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            email: "",
            password: "",
            errorInicioSesion : false,
        };
    },
    methods: {
        async iniciarSesion() {
            var payload = {
                email: this.email,
                password: this.password,
            };
            try {
                this.errorInicioSesion = false;
                let response = await axios.post("https://colteerbe.herokuapp.com/api/auth/login", payload);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_type', response.data.user.user_type);
                this.$router.push('/dashboard');
            } catch (error) {
                console.log(error.response.data);
                this.errorInicioSesion = true;
            }

        },
        checkLogin() {
            if(localStorage.getItem('token') && localStorage.getItem('user_type'))
                this.$router.push('/dashboard');
        }
    },
    mounted() {
        this.checkLogin();
    }
};
</script>
<style>
</style>
