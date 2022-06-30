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
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h1 class="display-2 text-white">Estadísticas</h1>
                        <div style='margin-bottom: 100px'></div>
                        <h1 class="display-2 text-white"><b>Número de Voluntarios</b></h1>
                        <h1><b>{{ numberOfVolunteers.number }}</b></h1>
                        <div style='margin-bottom: 40px'></div>
                        <h1 class="display-2 text-white">Donaciones</h1>
                        <div class="Chart">
                            <Bar v-if="loadedDonations" :chart-data="chartDataDonations"
                                :chart-options="chartOptions" />
                        </div>
                        <div style='margin-bottom: 50px'></div>
                        <h1 class="display-2 text-white">Voluntarios por mes</h1>
                        <div class="Chart">
                            <Bar v-if="loadedVolunteers" :chart-data="chartDataVolunteers"
                                :chart-options="chartOptions" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios";
import { Bar } from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: {
        Bar
    },
    data() {
        return {
            aux: localStorage.getItem('token'),
            user_type: localStorage.getItem('user_type'),
            loadedDonations: false,
            loadedVolunteers: false,
            chartDataDonations: { labels: [], datasets: [] },
            chartDataVolunteers: {
                labels: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'],
                    datasets: []
            },
            numberOfVolunteers: -1,
            donations: {},
            volunteersByMonth: {},

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    methods: {
        async getStatics() {
            try {
                let response = await axios.get("https://colteerbe.herokuapp.com/api/statistics/number-of-volunteers");
                this.numberOfVolunteers = response.data;

                response = await axios.get("https://colteerbe.herokuapp.com/api/statistics/donations");
                this.donations = response.data;

                response = await axios.get("https://colteerbe.herokuapp.com/api/statistics/volunteers-by-month");
                this.volunteersByMonth = response.data;

                this.transformData();
            } catch (error) {
                console.log(error.response.data);
            }

        },
        transformData() {
            //Datos de las donaciones
            var dataValue = {
                label: 'Valor $',
                backgroundColor: '#eb9642',
                data: [],
            };
            var dataAverage = {
                label: 'Promedio $',
                backgroundColor: '#1C98D8',
                data: [],
            };
            for (const property in this.donations) {
                this.chartDataDonations['labels'].push(property);
                dataValue['data'].push(this.donations[property].value);
                dataAverage['data'].push(this.donations[property].average);
            }
            this.chartDataDonations['datasets'].push(dataValue);
            this.chartDataDonations['datasets'].push(dataAverage);

            this.loadedDonations = true;

            //Datos de los voluntarios
            var dataVolunteers = {
                label: 'Número de Voluntarios (2022)',
                backgroundColor: '#CA495F',
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            };

            for (const property in this.volunteersByMonth['data']) { 
                dataVolunteers['data'][this.volunteersByMonth['data'][property].month - 1] = this.volunteersByMonth['data'][property].total
            }
            this.chartDataVolunteers['datasets'].push(dataVolunteers);

            this.loadedVolunteers = true;
        },
        checkLogin() {
            if (!localStorage.getItem('token')) {
                this.$router.push('/login');
            }
        }
    },
    mounted() {
        this.checkLogin();
        this.getStatics();
    }
};
</script>
<style>
.Chart {
    background: #ffffffe1;
    border-radius: 15px;
    padding: 10px;
    padding-right: 20px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin: 25px 0;
}
</style>