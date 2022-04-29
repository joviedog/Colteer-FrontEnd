<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Ofrece tu tiempo en beneficio de los demás</h1>
                    <p class="lead text-white mt-4">El voluntariado no es una forma de estar, sino una forma de ser;
                        no se trata solo de horas que se dedican a diferentes tareas, sino de estar atentos y abiertos 
                        solidariamente a la mejora estructural de la sociedad en la cual vivimos, a la lucha por un mundo más 
                        justo, solidario, equitativo e igualitario.</p>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/carousel/vol1.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/carousel/vol2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/carousel/vol3.jpeg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/carousel/vol4.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
