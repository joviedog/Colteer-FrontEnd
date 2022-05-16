<template>
  <v-container grid-list-md>
      <v-layout row wrap>
          <v-flex xs12 sm6>
              <v-card>
                  <v-col cols="12" sm="3">
                  <v-btn icon color="pink">
                      <h6>Organización<v-icon>mdi-heart</v-icon></h6>
                  </v-btn>
                  </v-col>   
                  <v-avatar color="primary" size="128">
                      <v-img src="@/assets/logo.png"></v-img>
                  </v-avatar>
                  <v-card-actions>
                      <b-btn><v-img src="@/assets/Iconos/camera.png"></v-img></b-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>

          <v-flex xs12 sm6>
              <v-card> 
                        <v-card-title class="cyan darken-1">
                        <span class="text-h5 white--text">ONG</span>

                        <v-spacer></v-spacer>

                        <v-btn dark icon>
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>

                        <v-btn dark icon>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>

                        <v-btn
                            dark
                            icon
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                        </v-card-title>

                        <v-list>
                        <v-list-item>
                            <v-list-item-action>
                            <v-icon>mdi-phone</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>(650) 555-1234</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                            <v-icon>mdi-message-text</v-icon>
                            </v-list-item-action>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-action>
                            <v-icon>mdi-phone</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>(323) 555-6789</v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                            <v-icon>mdi-message-text</v-icon>
                            </v-list-item-action>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-action>
                            <v-icon>mdi-email</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>ONG@gmail.com</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-action>
                            <v-icon>mdi-map-marker</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>Colombia</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list>
              </v-card>
          </v-flex>

          
          
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>

<style>

</style>