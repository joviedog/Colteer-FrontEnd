<template>
    <div>
        <div v-if="(aux != undefined)">
            <div>
                <div class="position-relative">
                    <!-- shape Hero -->
                    <section class="section-shaped my-0">
                        <div class="shape shape-style-1 shape-default shape-skew">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="container shape-container d-flex">
                            <div class="col px-0">
                                <div class="row">
                                    <div class="col-lg-6">
                                        
                                        <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
                                        <h1 class="display-3  text-white">Lista de voluntarios</h1>  
                                        <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <section class="section section-lg pt-lg-0 mt--200">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="row row-grid">
                                    <div class="container">
                                        <table class="table table-hover table-dark">
                                            <thead>
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Correo</th>
                                                <th scope="col">Documento</th>
                                                <th scope="col">Telefono</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="voluntario in this.dataVolunteersearch" :key="voluntario.aux">
                                                    <th scope="row"></th>
                                                    <td>{{dataVolunteersearch.name}}</td>
                                                    <td>{{dataVolunteersearch.email}}</td>
                                                    <td>{{dataVolunteersearch.document}}</td>
                                                    <td>{{dataVolunteersearch.phone}}</td>
                                                </tr>
                                                
                                            </tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div v-else>
            <div>
                <div class="position-relative">
                    <!-- shape Hero -->
                    <section class="section-shaped my-0">
                        <div class="shape shape-style-1 shape-default shape-skew">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="container shape-container d-flex">
                            <div class="col px-0">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <h1 class="display-3  text-white"><center>Oooops. Parece que no has iniciado sesión</center>
                                        </h1>
                                        <p class="lead  text-white"><center>Por favor, ve al apartado de Log In del home e inicia sesión.
                                            Muchas personas necesitan de tu tiempo y disposición hacia los voluntariados.</center>
                                        </p>
                                        <img src="img/theme/disconnected1.png" class="img-center img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";


export default {
    data() {
        return {
            aux: localStorage.getItem('token'),
            dataVolunteersearch:{},
        };
    },

    methods:{
        async getSession() {
            try {
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.get("http://localhost:8000/api/sessions/", { headers });
                this.sessions = response.data;
            } catch (error) {
                console.log(error);

            }

        },
        async getVolunteerSearch(){
            try {
                const headers={
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.get("http://localhost:8000/api/auth/volunteer", {headers});
                console.log(response.data);
                this.dataVolunteersearch = response.data;

            } catch (error) {
                console.log(error);
            }
        },
        async DeleteVolunteer(){
            try {
                const headers={
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.delete("http://localhost:8000/api/auth/volunteer", {headers});
                console.log(response.data);
                this.dataVolunteersearch = response.data;

            } catch (error) {
                console.log(error);
            }
        }

    },
    mounted(){
        if(localStorage.getItem('token')){
            this.getVolunteerSearch();
        }else{
            this.$router.push("/login")
        }
        //this.getVolunteerSearch();
    }


};
</script>
<style>
</style>