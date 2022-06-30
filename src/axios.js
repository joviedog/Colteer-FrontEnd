import axios from 'axios';
import VueAxios from "vue-axios";

axios.defaults.baseURL='https://colteerbe.herokuapp.com/api'

axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');