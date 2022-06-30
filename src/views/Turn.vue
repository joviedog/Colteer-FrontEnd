<template>
    <div v-if="(aux != undefined)">
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-success">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h1 class="display-3 text-white">Añade un Turno a tus Sesiones</h1>
                        <h5 class="text-white">En este espacio podrás visualizar todas tus sesiones
                            y agregar turnos a las que desees. Para comenzar selecciona una de las
                            sesiones presentadas.
                        </h5>
                    </div>

                    <b-modal v-model="modalShow" id="modal-center" centered title="Agregar Turno" @ok="createTurn"
                        @show="resetModal" @hidden="resetModal" hide-backdrop>
                        <form ref="form" v-on:submit.prevent="createTurn">
                            <b-form-group label="Cupos Disponibles" label-for="name-input">
                                <b-form-input id="name-input" v-model="cuposDisponibles" type="number" min="1"
                                    max="1000" step="1"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Cupos Llenos" label-for="name-input">
                                <b-form-input id="name-input" v-model="cuposLlenos" type="number" min="1" max="1000"
                                    step="1"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Seleccione la hora de inicio" label-for="name-input">
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}" @on-open="focus" @on-close="blur"
                                        :config="{ allowInput: true, enableTime: true, noCalendar: true, time_24hr: true }"
                                        class="form-control datepicker" v-model="starTime.simple">
                                    </flat-picker>
                                </base-input>
                            </b-form-group>
                            <b-form-group label="Seleccione la hora de finalización" label-for="name-input">
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}" @on-open="focus" @on-close="blur"
                                        :config="{ allowInput: true, enableTime: true, noCalendar: true, time_24hr: true }"
                                        class="form-control datepicker" v-model="endTime.simple">
                                    </flat-picker>
                                </base-input>
                            </b-form-group>
                        </form>
                    </b-modal>

                    <div class="col-lg-6 order-lg-1" v-for="(item, index) in this.sessions" :key="index">
                        <card shadow class="shadow-lg--hover mt-5" v-if="index % 3 === 0">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fa-solid fa-handshake-angle fa-bounce" style=" --fa-bounce-start-scale-x: 1;
                                    --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1;
                                    --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;"
                                        gradient="success" color="white" shadow rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">{{ item.name }}</h5>
                                    <p>{{ item.description }}</p>
                                    <a @click="openModal(item.id)" class="text-success" style="cursor: pointer">Agregar
                                        Turno</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5" v-if="index % 3 === 1">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fa-solid fa-heart fa-beat" style="--fa-beat-scale: 1.2;
                                    --fa-animation-duration: 2s;" gradient="warning" color="white" shadow rounded>
                                    </icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">{{ item.name }}</h5>
                                    <p>{{ item.description }}</p>
                                    <a @click="openModal(item.id)" class="text-warning" style="cursor: pointer">Agregar
                                        Turno</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5" v-if="index % 3 === 2">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fa-solid fa-earth-americas fa-fade"
                                        style="--fa-animation-duration: 2s; --fa-fade-opacity: 0.6;" gradient="info"
                                        color="white" shadow rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-info">{{ item.name }}</h5>
                                    <p>{{ item.description }}</p>
                                    <a @click="openModal(item.id)" class="text-info" style="cursor: pointer">Agregar
                                        Turno</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from 'sweetalert2';

let fechaActual = new Date();
export default {
    data() {
        return {
            aux: localStorage.getItem('token'),
            sessions: [],
            modalShow: false,
            cuposDisponibles: 1,
            cuposLlenos: 1,
            starTime: {
                simple: fechaActual.toISOString().split('T')[0]
            },
            endTime: {
                simple: fechaActual.toISOString().split('T')[0]
            },
            idSession: -1
        };
    },
    methods: {
        checkLogin() {
            if (!localStorage.getItem('token')) {
                this.$router.push('/login');
            }
            if (localStorage.getItem('token') && localStorage.getItem('user_type') != 'Organization') {
                this.$router.push('/dashboard');
            }
        },
        async getSessionsByOrganization() {
            try {
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.get("https://colteerbe.herokuapp.com/api/my-sessions/", { headers });
                this.sessions = response.data;
            } catch (error) {
                console.log(error);

            }

        },
        openModal(idSession) {
            this.modalShow = !this.modalShow;
            this.idSession = idSession;
        },
        resetModal() {
            this.cuposDisponibles = 1;
            this.cuposLlenos = 1;
        },
        async createTurn() {
            try {
                let dataTurn = {
                    "available": this.cuposDisponibles,
                    "full": this.cuposLlenos,
                    "start_time": this.starTime.simple + ":00",
                    "end_time": this.endTime.simple + ":00",
                };

                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };

                let response = await axios.post("http://localhost:8000/api/sessions/session/" + this.idSession +
                    "/create-turn", dataTurn, { headers });

                Swal.fire({
                    icon: 'success',
                    title: 'Bien Hecho',
                    text: 'Se ha creado el turno correctamente',
                    timer: 2500
                })
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Ha ocurrido un error!',
                    footer: 'Por favor, vuelve a intentarlo'
                })
                console.log(error);

            }
        },

    },
    mounted() {
        this.checkLogin();
        this.getSessionsByOrganization();
    },
    components: {
        flatPicker
    }
};
</script>
<style>
</style>