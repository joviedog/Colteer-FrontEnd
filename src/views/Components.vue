<template>
    <div>
        <hero></hero>
        <carousel></carousel>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import axios from 'axios'

export default {
  name: "components",
  components: {
    Hero,
    Carousel,
  },
  /*
  name: 'Home',
  async created(){
    const response  = await axios.get('user');
    console.log(response);
  }*/
};
</script>
