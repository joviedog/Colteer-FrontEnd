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
                                                <th scope="col">Telefono</th>
                                                <th scope="col">Status</th>
                                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th ></th>
                                                        <td>Jota Mario Velez</td>
                                                        <td>jmvelez@unal.edu.co</td>
                                                        <td>3103154567</td>
                                                        <td><b-button variant="success" v-on:click="approveVolunteer()"><img src="@/assets/ColteerImg/Icons/person.svg"></b-button></td>
                                                        <td><b-button variant="danger" v-on:click="rejectVolunteer()"><img src="@/assets/ColteerImg/Icons/eliminar.svg"></b-button></td>
                                                </tr>

                                                <tr>
                                                    <th ></th>
                                                        <td>Juan Pablo Bustamante</td>
                                                        <td>jubustamantem@unal.edu.co</td>
                                                        <td>3213249137</td>
                                                        <td><b-button variant="success" v-on:click="approveVolunteer()"><img src="@/assets/ColteerImg/Icons/person.svg"></b-button></td>
                                                        <td><b-button variant="danger" v-on:click="rejectVolunteer()"><img src="@/assets/ColteerImg/Icons/eliminar.svg"></b-button></td>
                                                </tr>
                                                
                                                <tr>
                                                    <th ></th>
                                                        <td>Maria Paula Calderon</td>
                                                        <td>macalderonj@unal.edu.co</td>
                                                        <td>3156556608</td>
                                                        <td><b-button variant="success" v-on:click="approveVolunteer()"><img src="@/assets/ColteerImg/Icons/person.svg"></b-button></td>
                                                        <td><b-button variant="danger" v-on:click="rejectVolunteer()"><img src="@/assets/ColteerImg/Icons/eliminar.svg"></b-button></td>
                                                </tr>

                                                <tr>
                                                    <th ></th>
                                                        <td>Julian Steven Vega</td>
                                                        <td>jvegad@unal.edu.co</td>
                                                        <td>3144875425</td>
                                                        <td><b-button variant="success" v-on:click="approveVolunteer()"><img src="@/assets/ColteerImg/Icons/person.svg"></b-button></td>
                                                        <td><b-button variant="danger" v-on:click="rejectVolunteer()"><img src="@/assets/ColteerImg/Icons/eliminar.svg"></b-button></td>
                                                </tr>

                                                <tr>
                                                    <th ></th>
                                                        <td>Julian Cordero</td>
                                                        <td>ccordero@unal.edu.co</td>
                                                        <td>3144410732</td>
                                                        <td><b-button variant="success" v-on:click="approveVolunteer()"><img src="@/assets/ColteerImg/Icons/person.svg"></b-button></td>
                                                        <td><b-button variant="danger" v-on:click="rejectVolunteer()"><img src="@/assets/ColteerImg/Icons/eliminar.svg"></b-button></td>
                                                </tr>
                                                
                                                <tr>
                                                    <th ></th>
                                                        <td>Santiago Vallejo</td>
                                                        <td>sarodriguezva@unal.edu.co</td>
                                                        <td>3204192656</td>
                                                        <td><b-button variant="success" v-on:click="approveVolunteer()"><img src="@/assets/ColteerImg/Icons/person.svg"></b-button></td>
                                                        <td><b-button variant="danger" v-on:click="rejectVolunteer()"><img src="@/assets/ColteerImg/Icons/eliminar.svg"></b-button></td>
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
        async getVoluntariados() {
            try {
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                console.log("Requesting volunteers")
                // let response = await axios.get("https://colteerbe.herokuapp.com/api/sessions/session", { headers });
                // this.sessions = response.data;
            } catch (error) {
                console.log(error);

            }

        },

        async approveVolunteer(nameSession) {
            try {
                alert("Voluntario añadido!")
                var idSession = -1;
                
                
                for (var i = 0; i < this.sessions.length; i++) {
                    if (this.sessions[i].name == nameSession) {
                        idSession = this.sessions[i].id;
                    }
                }

                if(idSession == -1)
                    throw "Error";

                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                const url = "https://colteerbe.herokuapp.com/api/sessions/session/" + String(idSession) + "/approve-volunteer/"+String(idVolunteer);
                console.log(url)
                let response = await axios.post(url, {}, { headers });
            } catch (error) {
                console.log(error);
            }
        },

        async rejectVolunteer(nameSession) {
            try {
                alert("Voluntario rechazado!")
                var idSession = -1;
                for (var i = 0; i < this.sessions.length; i++) {
                    if (this.sessions[i].name == nameSession) {
                        idSession = this.sessions[i].id;
                    }
                }

                if(idSession == -1)
                    throw "Error";

                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                const url = "https://colteerbe.herokuapp.com/api/sessions/session/" + String(idSession) + "/reject-volunteer/"+String(idVolunteer);
                let response = await axios.post(url, {}, { headers });
            } catch (error) {
                console.log(error);
            }
        },

        async getVolunteerSearch(){
            try {
                const headers={
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.get("https://colteerbe.herokuapp.com/api/my-sessions", {headers});
                
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