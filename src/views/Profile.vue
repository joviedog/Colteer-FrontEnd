<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="@/assets/ColteerImg/logo.png" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Inicio</a>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="text-center mt-5" >
                            <h3><img src="@/assets/ColteerImg/Icons/person.svg"> {{datavoluntario.name}}
                                <span class="font-weight-light"></span>
                            </h3>
                            
                            <div class="h6 mt-4"><img src="@/assets/ColteerImg/Icons/person.svg"><i class="ni business_briefcase-24 mr-2"></i> {{datavoluntario.username}} </div>
                            <div class="h6 mt-4"><img src="@/assets/ColteerImg/Icons/calendar.svg"><i class="ni business_briefcase-24 mr-2"></i> {{datavoluntario.birthday}} </div>
                            <div class="h6 mt-4"><img src="@/assets/ColteerImg/Icons/email.svg"><i class="ni business_briefcase-24 mr-2"></i> {{datavoluntario.email}}</div>
                            <div class="h6 mt-4"><img src="@/assets/ColteerImg/Icons/telephone.svg"><i class="ni business_briefcase-24 mr-2"></i> {{datavoluntario.phone}}</div>
                            <div class="h6 mt-4"><img src="@/assets/ColteerImg/Icons/document.svg"><i class="ni business_briefcase-24 mr-2"></i> {{datavoluntario.document}}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p></p>
                                    <a href="#">Show more</a>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            aux: localStorage.getItem('token'),
            datavoluntario:{},
        };
    },

    methods: {
        async getVolunteerinformation(){
            try {
                const headers={
                    'Authorization': 'Token ' + localStorage.getItem('token')
                };
                let response = await axios.get("https://colteerbe.herokuapp.com/api/auth/volunteer", {headers});
                console.log(response.data);
                this.datavoluntario = response.data;

            } catch (error) {
                console.log(error);
            }
     },
     
    },

     mounted(){
        /*if(localStorage.getItem('token')){
            this.getVolunteerInformation();
        }else{
            this.$router.push("/login")
        }*/
        this.getVolunteerinformation();
    }
     
};
</script>
<style>
</style>