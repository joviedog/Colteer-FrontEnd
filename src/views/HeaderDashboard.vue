<template>
    <div v-if="(aux != undefined)">
        <header class="header-global">
            <base-nav class="navbar-main" transparent type="" effect="light" expand>
                <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
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
                    <li class="nav-item">
                        <!-- <div style="cursor: pointer" title="Ver Estadísticas">
                    <i class="fa fa-bar-chart fa-lg" aria-hidden="true" style="color: white;" ></i>
                </div> -->
                        <base-button type="secondary" icon="ni ni-chart-bar-32" iconOnly></base-button>
                    </li>
                    <li class="nav-item d-none d-lg-block ml-lg-4">
                        <base-dropdown>
                            <base-button slot="title" type="secondary" class="dropdown-toggle"
                                icon="fa fa-user-o fa-lg">
                                Tu Usuario
                            </base-button>
                            <a class="dropdown-item" href="#/profile">Ver Información</a>
                            <a class="dropdown-item" href="#/addVolunteering">Añadir Sesión Voluntariado</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" type="button" v-on:click="cerrarSesion" style="cursor: pointer">Cerrar Sesión</a>
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
        };
    },
    methods:{
        async cerrarSesion() {
            try {
                const headers = {
                    "Content-Type" : "application/json",
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                await axios.post("http://localhost:8000/api/auth/logout", {}, {headers});
                localStorage.removeItem('token');
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