<template>
    <div v-if="(aux != undefined)">
        <header class="header-global">
            <base-nav class="navbar-main" transparent type="" effect="light" expand>
                <router-link slot="brand" class="navbar-brand mr-lg-5" to="/dashboard">
                    <img src="img/brand/white.png">
                </router-link>

                <div class="row" slot="content-header" slot-scope="{closeMenu}">
                    <div class="col-6 collapse-brand">
                        <a href="../index.html">
                            <img src="img/brand/blue.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <close-button @click="closeMenu"></close-button>
                    </div>
                </div>

                <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    <li class="nav-item" v-if="(user_type == 'Organization')">
                        <base-button tag="a" type="secondary" href="#/stats" role="button"
                            icon="ni ni-chart-bar-32" iconOnly></base-button>
                    </li>
                    <li class="nav-item d-none d-lg-block ml-lg-4">
                        <base-dropdown>
                            <base-button slot="title" type="secondary" class="dropdown-toggle"
                                icon="fa fa-user-o fa-lg">
                                Tu Usuario
                            </base-button>
                            <a class="dropdown-item" href="#/dashboard">Ver Sesiones</a>
                            <a class="dropdown-item" href="#/profile">Ver Información</a>
                            <a class="dropdown-item" href="#/addVolunteering" v-if="(user_type == 'Organization')">Añadir Sesión Voluntariado</a>
                            <a class="dropdown-item" href="#/turn" v-if="(user_type == 'Organization')">Agregar Turno a Sesión</a>
                            <a class="dropdown-item" href="#/volunteerSearch">Buscar Voluntariado</a>
                            <a class="dropdown-item" href="#/staffPicking">Lista de Voluntarios</a>
                            <a class="dropdown-item" href="#/donations">Donar</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" type="button" v-on:click="cerrarSesion"
                                style="cursor: pointer">Cerrar Sesión</a>
                        </base-dropdown>

                    </li>
                </ul>
            </base-nav>
        </header>
    </div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import axios from "axios";

export default {
    data() {
        return {
            aux: localStorage.getItem('token'),
            user_type: localStorage.getItem('user_type'),
        };
    },
    methods: {
        async cerrarSesion() {
            try {
                const headers = {
                    "Content-Type": "application/json",
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                await axios.post("http://localhost:8000/api/auth/logout", {}, { headers });
                localStorage.removeItem('token');
                localStorage.removeItem('user_type');
                this.$router.push('/');
            } catch (error) {
                console.log(error.response.data);

            }

        },
    },
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown
    }
};
</script>
<style>
</style>