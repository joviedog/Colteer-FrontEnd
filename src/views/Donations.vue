<template>
  <div id="app">
    <img width="55%" src="https://dummyimage.com/600x200/fff/&text=Donate+and+Support+US">
    <Donation/>
  </div>
</template>

<script>
import Donation from "/Users/jorge/Downloads/Colteer-FrontEnd-feature-newSession/src/components/Donation.vue";

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

