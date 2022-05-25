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
                                        <h1 class="display-3  text-white">Lista de posibles voluntarios</h1>  
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
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
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
import GlobalDirectives from "../plugins/globalDirectives";


export default {
    data() {
        return {
            aux: localStorage.getItem('token'),
            dataVolunteerSearch:{},
        };
    },

    mounted(){
        /*if(localStorage.getItem('token')){
            this.getVolunteerSearch();
        }else{
            this.$router.push("/login")
        }*/
    },

    methods:{
        async getVolunteerSearch(){
            try {
                const headers={
                    'Authorization': 'Token' + localStorage.getItem('token') 
                };

                let response = await axios.get("http://localhost:8000/api/auth/volunteer",{headers});
                console.log(response.data);
                this.dataVolunteerSearch= response.data;

            
            } catch (error) {
                console.log(error.response.data)
            }
        }
    }


};
</script>
<style>
</style>