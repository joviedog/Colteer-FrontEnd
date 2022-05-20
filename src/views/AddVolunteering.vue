<template>
    <div>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row justify-content-center">
                    <div class="row"></div>
                    <div class="col-lg-6 order-lg-1">
                        <h4 class="display-3 text-white">Agregar Nuevo Voluntariado</h4>
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
                                <h5 for="inputNombreSesion" class="text-white">Descripción de la sesión</h5>
                                <textarea class="form-control" id="textDescription" rows="4"
                                    placeholder="Ingresa la descripción (máximo 200 caracteres)" maxlength="200"
                                    resize="none" v-model="descripcionSesion" required></textarea>
                            </div>
                            <div class="form-group">
                                <h5 for="inputNombreSesion" class="text-white">Selecciona la fecha y hora de inicio y
                                    final de
                                    la sesión</h5>
                                <!-- <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}" @on-open="focus" @on-close="blur"
                                        :config="{ allowInput: true, minDate: new Date(), enableTime: true }"
                                        class="form-control datepicker" v-model="dates.simple" minDate>
                                    </flat-picker>
                                </base-input> -->
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}" @on-open="focus" @on-close="blur"
                                        :config="{ allowInput: true, mode: 'range', enableTime: true, minDate: new Date() }"
                                        class="form-control datepicker" v-model="dates.range" required>
                                    </flat-picker>
                                </base-input>
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

let fechaActual = new Date();
let fechaPost = new Date();
fechaPost.setDate(fechaPost.getDate() + 1);

export default {
    /*
    data() {
        return {
            dates: {
                simple: fechaActual.toISOString().split('T')[0]
            },
        };
    },*/
    data() {
        return {
            dates: {
                range: fechaActual.toISOString().split('T')[0] + " to " + fechaPost.toISOString().split('T')[0]
            },
            nombreSesion : "",
            descripcionSesion : "",
            fechaSesion : "",
            error : false,
            error_msg : "",
        };
    },
    methods:{
        crearSesion(){
            console.log(this.nombreSesion);
            console.log(this.descripcionSesion);
            console.log(this.dates.range);
        },
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