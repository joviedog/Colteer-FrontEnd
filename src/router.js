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
import Legal from "./views/Legal.vue";
import FAQ from "./views/FAQ.vue"
import RegisterOrganization from "./views/RegisterOrganization.vue";

//TEMAS DE VOLUNTARIADO
import Animales from "./views/components/VolunteerTemas/Animales.vue";
import Arteycultura from "./views/components/VolunteerTemas/Arteycultura.vue";
import Deportesyactividadesrecreativas from "./views/components/VolunteerTemas/Deportesyactividadesrecreativas.vue";
import Educacionyalfabetizacion from "./views/components/VolunteerTemas/Educacionyalfabetizacion.vue";
import Hambre from "./views/components/VolunteerTemas/Hambre.vue";
import Informaticaytecnologia from "./views/components/VolunteerTemas/Informaticaytecnologia.vue";
import Inmigrantesyrefugiados from "./views/components/VolunteerTemas/Inmigrantesyrefugiados.vue";
import Internacional from "./views/components/VolunteerTemas/Internacional.vue";
import JusticiayLegalidad from "./views/components/VolunteerTemas/JusticiayLegalidad.vue";
import LGBTQ from "./views/components/VolunteerTemas/LGBTQ.vue";
import Medioambiente from "./views/components/VolunteerTemas/Medioambiente.vue";
import Mediosdecomunicacion from "./views/components/VolunteerTemas/Mediosdecomunicacion.vue";
import Mujeres from "./views/components/VolunteerTemas/Mujeres.vue";
import NinosJovenes from "./views/components/VolunteerTemas/NinosJovenes.vue";
import Discapacidad from "./views/components/VolunteerTemas/Discapacidad.vue";
import PersonasMayores from "./views/components/VolunteerTemas/PersonasMayores.vue";
import Personassinhogar from "./views/components/VolunteerTemas/Personassinhogar.vue";
import RazayEtnia from "./views/components/VolunteerTemas/RazayEtnia.vue";
import Salud from "./views/components/VolunteerTemas/Salud.vue";
import Veteranos from "./views/components/VolunteerTemas/Veteranos.vue";


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
      path: "/legal",
      name: "legal",
      components: {
        header: AppHeader,
        default: Legal,
        footer: AppFooter
      }
    },
    {
      path: "/FAQ",
      name: "FAQ",
      components: {
        header: AppHeader,
        default: FAQ,
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
      path: "/registerOrganization",
      name: "registerOrganization",
      components: {
        header: AppHeader,
        default: RegisterOrganization,
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
    },

////////////////////////////////////////////
    {
      path: "/animales",
      name: "animales",
      components: {
        header: HeaderDashboard,
        default: Animales,
        footer: AppFooter
      }
    },

    {
      path: "/arteycultura",
      name: "arteycultura",
      components: {
        header: HeaderDashboard,
        default: Arteycultura,
        footer: AppFooter
      }
    },

    {
      path: "/deportesyactividadesrecreativas",
      name: "deportesyactividadesrecreativas",
      components: {
        header: HeaderDashboard,
        default: Deportesyactividadesrecreativas,
        footer: AppFooter
      }
    },
    {
      path: "/educacionyalfabetizacion",
      name: "educacionyalfabetizacion",
      components: {
        header: HeaderDashboard,
        default: Educacionyalfabetizacion,
        footer: AppFooter
      }
    },
    {
      path: "/hambre",
      name: "hambre",
      components: {
        header: HeaderDashboard,
        default: Hambre,
        footer: AppFooter
      }
    },
    {
      path: "/informaticaytecnologia",
      name: "informaticaytecnologia",
      components: {
        header: HeaderDashboard,
        default: Informaticaytecnologia,
        footer: AppFooter
      }
    },
    {
      path: "/inmigrantesyrefugiados",
      name: "inmigrantesyrefugiados",
      components: {
        header: HeaderDashboard,
        default: Inmigrantesyrefugiados,
        footer: AppFooter
      }
    },
    {
      path: "/internacional",
      name: "internacional",
      components: {
        header: HeaderDashboard,
        default: Internacional,
        footer: AppFooter
      }
    },
    {
      path: "/justiciayLegalidad",
      name: "justiciayLegalidad",
      components: {
        header: HeaderDashboard,
        default: JusticiayLegalidad,
        footer: AppFooter
      }
    },
    {
      path: "/lgbtg",
      name: "lgbtg",
      components: {
        header: HeaderDashboard,
        default: LGBTQ,
        footer: AppFooter
      }
    },
    {
      path: "/medioambiente",
      name: "medioambiente",
      components: {
        header: HeaderDashboard,
        default: Medioambiente,
        footer: AppFooter
      }
    },
    {
      path: "/mediosdecomunicacion",
      name: "mediosdecomunicacion",
      components: {
        header: HeaderDashboard,
        default: Mediosdecomunicacion,
        footer: AppFooter
      }
    },
    {
      path: "/mujeres",
      name: "mujeres",
      components: {
        header: HeaderDashboard,
        default: Mujeres,
        footer: AppFooter
      }
    },
    {
      path: "/ninosjovenes",
      name: "ninosjovenes",
      components: {
        header: HeaderDashboard,
        default: NinosJovenes,
        footer: AppFooter
      }
    },
    {
      path: "/discapacidad",
      name: "discapacidad",
      components: {
        header: HeaderDashboard,
        default: Discapacidad,
        footer: AppFooter
      }
    },
    {
      path: "/personasmayores",
      name: "personasmayores",
      components: {
        header: HeaderDashboard,
        default: PersonasMayores,
        footer: AppFooter
      }
    },
    {
      path: "/personassinhogar",
      name: "personassinhogar",
      components: {
        header: HeaderDashboard,
        default: Personassinhogar,
        footer: AppFooter
      }
    },
    {
      path: "/razayetnia",
      name: "razayetnia",
      components: {
        header: HeaderDashboard,
        default: RazayEtnia,
        footer: AppFooter
      }
    },
    {
      path: "/salud",
      name: "salud",
      components: {
        header: HeaderDashboard,
        default: Salud,
        footer: AppFooter
      }
    },
    {
      path: "/veteranos",
      name: "veteranos",
      components: {
        header: HeaderDashboard,
        default: Veteranos,
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
