import axios from 'axios';
import VueAxios from "vue-axios";

axios.defaults.baseURL='http://localhost:8000/api/auth/register_volunteer'

axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');