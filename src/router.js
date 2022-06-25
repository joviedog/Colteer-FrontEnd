import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Dashboard from "./views/Dashboard.vue";
import HeaderDashboard from "./views/HeaderDashboard.vue"
import AddVolunteering from "./views/AddVolunteering.vue";
import VolunteerSearch from "./views/VolunteerSearch.vue";
import Donations from "./views/Donations.vue";
import Stats from "./views/Stats.vue";
import Turn from "./views/Turn.vue";
import StaffPicking from "./views/StaffPicking.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: HeaderDashboard,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      components: {
        header: HeaderDashboard,
        default: Dashboard,
        footer: AppFooter
      }
    },
    {
      path: "/addVolunteering",
      name: "addVolunteering",
      components: {
        header: HeaderDashboard,
        default: AddVolunteering,
        footer: AppFooter
      }
    },
    {
      path: "/volunteerSearch",
      name: "volunteerSearch",
      components: {
        header: HeaderDashboard,
        default: VolunteerSearch,
        footer: AppFooter
      }
    },
    {
      path: "/stats",
      name: "stats",
      components: {
        header: HeaderDashboard,
        default: Stats,
        footer: AppFooter
      }
    },
    {
      path: "/turn",
      name: "turns",
      components: {
        header: HeaderDashboard,
        default: Turn,
        footer: AppFooter
      }
    },
    {
      path: "/staffPicking",
      name: "staffPicking",
      components: {
        header: HeaderDashboard,
        default: StaffPicking,
        footer: AppFooter
      }
    },
    {
      path: "/donations",
      name: "donations",
      components: {
        header: HeaderDashboard,
        default: Donations,
        footer: AppFooter
      }  
    }    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
