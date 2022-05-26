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
                                <h4>Donaciones</h4>
                            </div>
                            <form v-on:submit.prevent="registrarVoluntario">
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Nombre</h6>
                                    <input alternative class="form-control" placeholder="Name" required>
                                </div>
                                <div class="form-group">
                                    <h6 for="inputNombreSesion">Valor a donar</h6> <!-- Cambie los placeholder-->
                                    <input alternative class="form-control" placeholder="valor" required>
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
import axios from "axios";
//import VueAxios from "vue-axios";
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
                let response = await axios.post("http://localhost:8000/api/auth/login", payload);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                localStorage.setItem('token', response.data.token);
                this.$router.push('/dashboard');
            } catch (error) {
                console.log(error.response.data);
                this.errorInicioSesion = true;
            }

        },
    }
};
</script>
<style>
</style>
