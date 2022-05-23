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
                <div class="col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h3>Iniciar Sesión</h3>
                            </div>
                            <form v-on:submit.prevent="iniciarSesion">
                                <div class="form-group">
                                    <input alternative  class="form-control" placeholder="Email"
                                    v-model="user" required>
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
                            <a href="#" class="text-light">
                                <small>Crea una nueva cuenta (voluntario)</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
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
    import {reactive} from 'vue';
    import {useRouter} from "vue-router";
    import router from '../router/index';
    import axios from 'axios';

    export default {
        name:'Login',
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods:{
            handleSubmit(){
                const response = await axios.post('login',{
                    email:this.email,
                    password:this.password
                });
                localStorage.setItem('token',response.data.token);
            }
        }
    }
</script>
<style>
</style>
