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
                                        <h1 class="display-3  text-white">¿Quieres realizar un voluntariado?
                                        </h1>
                                        <p class="lead  text-white">Te presentamos los volunatiados existentes
                                            actualmtente,
                                            escoge el que más te guste y se adapte a tus conocimientos y habilidades. Y
                                            recuerda
                                            "El más pequeño acto de amabilidad vale más que la más grande intención" -
                                            Oscar
                                            Wilde.
                                        </p>
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

                                <div class="row row-grid" v-for="(item, index) in this.sessions" :key="index">
                                    <div class="col-lg-8" v-if="index % 3 === 0">
                                        <card class="border-0" hover shadow body-classes="py-5">
                                            <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                            </icon>
                                            <h6 class="text-primary text-uppercase">{{ item.name }}</h6>
                                            <p class="description mt-3">{{ item.description }}</p>
                                            <div>
                                                <badge type="primary" rounded>{{ "Etiqueta: " +
                                                        dictCiudades[item.category]
                                                }}
                                                </badge>
                                                <badge type="primary" rounded>{{ "Ubicación: " + item.location }}
                                                </badge>
                                                <badge type="primary" rounded>{{ "Fecha: " + item.date.slice(0, 10) }}
                                                </badge>
                                                <badge type="primary" rounded>{{ "Hora Inicio: " + item.start_time }}
                                                </badge>
                                                <badge type="primary" rounded>{{ "Hora Fin: " + item.end_time }}</badge>
                                            </div>
                                            <base-button v-on:click="comprobarInscripcion(item.name)" type="primary"
                                                class="mt-4">
                                                ¡Inscríbete!
                                            </base-button>
                                        </card>
                                    </div>
                                    <div class="col-lg-8" v-if="index % 3 === 1">
                                        <card class="border-0" hover shadow body-classes="py-5">
                                            <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                            </icon>
                                            <h6 class="text-success text-uppercase">{{ item.name }}</h6>
                                            <p class="description mt-3">{{ item.description }}</p>
                                            <div>
                                                <badge type="success" rounded>{{ "Etiqueta: " +
                                                        dictCiudades[item.category]
                                                }}
                                                </badge>
                                                <badge type="success" rounded>{{ "Ubicación: " + item.location }}
                                                </badge>
                                                <badge type="success" rounded>{{ "Fecha: " + item.date.slice(0, 10) }}
                                                </badge>
                                                <badge type="success" rounded>{{ "Hora Inicio: " + item.start_time }}
                                                </badge>
                                                <badge type="success" rounded>{{ "Hora Fin: " + item.end_time }}</badge>
                                            </div>
                                            <base-button v-on:click="comprobarInscripcion(item.name)" type="success"
                                                class="mt-4">
                                                ¡Inscríbete!
                                            </base-button>
                                        </card>
                                    </div>
                                    <div class="col-lg-8" v-if="index % 3 === 2">
                                        <card class="border-0" hover shadow body-classes="py-5">
                                            <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                            </icon>
                                            <h6 class="text-warning text-uppercase">{{ item.name }}</h6>
                                            <p class="description mt-3">{{ item.description }}</p>
                                            <div>
                                                <badge type="warning" rounded>{{ "Etiqueta: " +
                                                        dictCiudades[item.category]
                                                }}
                                                </badge>
                                                <badge type="warning" rounded>{{ "Ubicación: " + item.location }}
                                                </badge>
                                                <badge type="warning" rounded>{{ "Fecha: " + item.date.slice(0, 10) }}
                                                </badge>
                                                <badge type="warning" rounded>{{ "Hora Inicio: " + item.start_time }}
                                                </badge>
                                                <badge type="warning" rounded>{{ "Hora Fin: " + item.end_time }}</badge>
                                            </div>
                                            <base-button v-on:click="comprobarInscripcion(item.name)" type="warning"
                                                class="mt-4">
                                                ¡Inscríbete!
                                            </base-button>
                                        </card>
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
                                        <h1 class="display-3  text-white">
                                            <center>Oooops. Parece que no has iniciado sesión</center>
                                        </h1>
                                        <p class="lead  text-white">
                                            <center>Por favor, ve al apartado de Log In del home e inicia sesión.
                                                Muchas personas necesitan de tu tiempo y disposición hacia los
                                                voluntariados.</center>
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
import Swal from 'sweetalert2';

export default {
    data() {

        console.log(localStorage.getItem('token'));
        return {
            aux: localStorage.getItem('token'),
            sessions: [],
            n: 0,
            dictCiudades: {
                "1": "Animales",
                "2": "Arte y cultura",
                "3": "Deportes y actividades recreativas",
                "4": "Educación y alfabetización",
                "5": "Hambre",
                "6": "Informática y tecnología",
                "7": "Inmigrantes y refugiados",
                "8": "Internacional",
                "9": "Justicia y Legalidad",
                "10": "LGBTQ+",
                "11": "Medio ambiente",
                "12": "Medios de comunicación y radiodifusión",
                "13": "Mujeres",
                "14": "Niños y jóvenes",
                "15": "Personas con discapacidad",
                "16": "Personas mayores",
                "17": "Personas sin hogar y vivienda",
                "18": "Raza y etnia",
                "19": "Salud y medicina",
                "20": "Veteranos y familias de militares",
            }
        };
    },
    methods: {
        async getVoluntariados() {
            try {
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.get("http://localhost:8000/api/sessions/", { headers });
                this.sessions = response.data;
                this.n = this.sessions.length;
            } catch (error) {
                console.log(error);

            }

        },
        async inscribirseSesion(nameSession) {
            try {
                var idSession = -1;
                for (var i = 0; i < this.sessions.length; i++) {
                    if (this.sessions[i].name == nameSession) {
                        idSession = this.sessions[i].id;
                    }
                }
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                const url = "http://localhost:8000/api/sessions/session/" + String(idSession) + "/register-volunteer";
                let response = await axios.post(url, {}, { headers });
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo ha ido mal, Por favor, vuelve a intentarlo'
                })
            }

        },
        comprobarInscripcion(nameSession) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: '¿Estás seguro que te quieres inscribir a esta sesión?',
                text: "Recuerda que la sesión a la que quieres aplicar es: " + nameSession,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: '¡Si, quiero aplicar!',
                cancelButtonText: 'No, lo pensaré',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    this.inscribirseSesion(nameSession);
                    swalWithBootstrapButtons.fire(
                        'Todo Listo',
                        'Te has inscrito correctamente a esta sesión. Gracias.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Inscripción Cancelada',
                        'Recuerda que puedes volver a inscribirte cuando quieras :)',
                        'error'
                    )
                }
            })

        },
    },
    mounted() {
        this.getVoluntariados();
    }
};
</script>
<style>
</style>