<template>
    <div v-if="(aux != undefined)">
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-info">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <base-alert type="success" dismissible v-if="this.creacionExitosa">
                <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                <span class="alert-inner--text"><strong>¡Gracias por ayudar! </strong> La sesión de voluntariado se ha
                    creado correctamente.</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </base-alert>
            <base-alert type="danger" dismissible v-if="this.errorCrearSesion">
                <span class="alert-inner--icon"><i class="fa fa-exclamation-triangle"></i></span>
                <span class="alert-inner--text"><strong>¡Error! </strong> Ha ocurrido un error al crear la sesión, por
                    favor vuelve a intentarlo</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </base-alert>
            <div class="container shape-container d-flex">
                <div class="row justify-content-center">
                    <div class="row"></div>
                    <div class="col-lg-7 order-lg-1">
                        <center><h4 class="display-3 text-white">Agregar Nuevo Voluntariado</h4></center>
                        <p class="text-white">A continuación, te presentamos un formato para crear una nueva
                            publicación sobre un voluntariado que vas a realizar. Por favor, llena todos
                            los campos.
                        </p>
                        <form v-on:submit.prevent="crearSesion">
                            <div class="form-group">
                                <h5 for="inputNombreSesion" class="text-white">Nombre de la sesión</h5>
                                <input class="form-control" id="inputNombreSesion" v-model="nombreSesion" required>
                                <small class="text-white">Recuerda que debe ser un nombre corto y descriptivo</small>
                            </div>
                            <div class="form-group">
                                <h5 for="textDescription" class="text-white">Descripción de la sesión</h5>
                                <textarea class="form-control" id="textDescription" rows="4"
                                    placeholder="Ingresa la descripción (máximo 200 caracteres)" maxlength="200"
                                    resize="none" v-model="descripcionSesion" required></textarea>
                            </div>

                            <div class="form-group">
                                <h5 for="inputNombreSesion" class="text-white">Selecciona la fecha y hora de inicio y
                                    final de
                                    la sesión</h5>
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}" @on-open="focus" @on-close="blur" :config="{
                                        allowInput: true, mode: 'range', enableTime: true, minDate: new Date(),
                                        minuteIncrement: 1
                                    }" class="form-control datepicker" v-model="dates.range" required>
                                    </flat-picker>
                                </base-input>
                            </div>

                            <div class="form-group">
                                <h5 for="inputTag" class="text-white">Selecciona el tema que más se ajuste a la sesión
                                </h5>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputTag">Tags</label>
                                    </div>
                                    <select class="custom-select" id="inputTag" v-model="etiqueta" required>
                                        <option value="1">Animales</option>
                                        <option value="2">Arte y cultura</option>
                                        <option value="3">Deportes y actividades recreativas</option>
                                        <option value="4">Educación y alfabetización</option>
                                        <option value="5">Hambre</option>
                                        <option value="6">Informática y tecnología</option>
                                        <option value="7">Inmigrantes y refugiados</option>
                                        <option value="8">Internacional</option>
                                        <option value="9">Justicia y Legalidad</option>
                                        <option value="10">LGBTQ+</option>
                                        <option value="11">Medio ambiente</option>
                                        <option value="12">Medios de comunicación y radiodifusión</option>
                                        <option value="13">Mujeres</option>
                                        <option value="14">Niños y jóvenes</option>
                                        <option value="15">Personas con discapacidad</option>
                                        <option value="16">Personas mayores</option>
                                        <option value="17">Personas sin hogar y vivienda</option>
                                        <option value="18">Raza y etnia</option>
                                        <option value="19">Salud y medicina</option>
                                        <option value="20">Veteranos y familias de militares</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <h5 for="inputCity" class="text-white">Selecciona la ciudad en dónde se realizará la sesión
                                </h5>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputCity">Ciudad</label>
                                    </div>
                                    <select class="custom-select" id="inputCity" v-model="city" required>
                                        <option value="Arauca">Arauca</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Barranquilla">Barranquilla</option>
                                        <option value="Bogotá D.C.">Bogotá D.C.</option>
                                        <option value="Bucaramanga">Bucaramanga</option>
                                        <option value="Cali">Cali</option>
                                        <option value="Cartagena">Cartagena</option>
                                        <option value="Cúcuta">Cúcuta</option>
                                        <option value="Florencia">Florencia</option>
                                        <option value="Ibagué">Ibagué</option>
                                        <option value="Leticia">Leticia</option>
                                        <option value="Manizales">Manizales</option>
                                        <option value="Medellín">Medellín</option>
                                        <option value="Mitú">Mitú</option>
                                        <option value="Mocoa">Mocoa</option>
                                        <option value="Montería">Montería</option>
                                        <option value="Neiva">Neiva</option>
                                        <option value="Pasto">Pasto</option>
                                        <option value="Pereira">Pereira</option>
                                        <option value="Popayán">Popayán</option>
                                        <option value="Puerto Carreño">Puerto Carreño</option>
                                        <option value="Puerto Inírida">Puerto Inírida</option>
                                        <option value="Quibdó">Quibdó</option>
                                        <option value="Riohacha">Riohacha</option>
                                        <option value="San Andrés">San Andrés</option>
                                        <option value="San José Del Guaviare">San José Del Guaviare</option>
                                        <option value="Santa Marta">Santa Marta</option>
                                        <option value="Sincelejo">Sincelejo</option>
                                        <option value="Tunja">Tunja</option>
                                        <option value="Valledupar">Valledupar</option>
                                        <option value="Villavicencio">Villavicencio</option>
                                        <option value="Yopal">Yopal</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary" id="btnCrearSesion">¡Crear Sesión!</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from "axios";

let fechaActual = new Date();
let fechaPost = new Date();
fechaPost.setDate(fechaPost.getDate() + 1);

export default {
    data() {
        return {
            aux: localStorage.getItem('token'),
            dates: {
                range: fechaActual.toISOString().split('T')[0] + " to " + fechaPost.toISOString().split('T')[0]
            },
            nombreSesion: "",
            descripcionSesion: "",
            fechaSesion: "",
            organizacion: 1,
            errorCrearSesion: false,
            creacionExitosa: false,
            etiqueta: "Animales",
            city: "",
        };
    },
    methods: {
        async crearSesion() {
            try {
                this.errorCrearSesion = false;
                this.creacionExitosa = false;
                let dataSession = {
                    "name": this.nombreSesion,
                    "date": this.dates.range.slice(0, 10),
                    "start_time": this.dates.range.slice(11, 16),
                    "end_time": this.dates.range.slice(31, 36),
                    "description": this.descripcionSesion,
                    "volunteer": [],
                    "category": this.etiqueta,
                    "location": this.city,
                };
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.post("http://localhost:8000/api/sessions/create-session", dataSession, { headers });
                this.creacionExitosa = true;
                this.nombreSesion = "";
                this.descripcionSesion = "";
            } catch (error) {
                console.log(error.response.data);
                this.errorCrearSesion = true;
            }

        },
        checkLogin() {
            if (!localStorage.getItem('token')) {
                this.$router.push('/login');
            }
        }
    },
    mounted() {
        this.checkLogin();
    },
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown,
        flatPicker
    }
};
</script>
<style>
</style>