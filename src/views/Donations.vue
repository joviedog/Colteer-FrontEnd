<template>
  <div id="app">
    <img width="55%" src="https://dummyimage.com/600x200/fff/&text=Donate+and+Support+US">
    <Donation/>
    <br><br>
    <h1><strong>Tambien puedes apoyar por Nequi</strong></h1>
    <img src="https://s3.amazonaws.com/nequi-wp-colombia/wp-content/app/wp-content/uploads/2019/01/Sticker.png">
  </div>
</template>

<script>
import Donation from "@/components/Donation.vue";

export default {
  name: "App",
  components: {
    Donation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

