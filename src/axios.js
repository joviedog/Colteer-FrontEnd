import axios from 'axios';
import VueAxios from "vue-axios";

axios.defaults.baseURL='https://colteerbe.herokuapp.com/api/auth/register_volunteer'

axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');