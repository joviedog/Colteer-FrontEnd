<template>
        <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">¿Quieres realizar un voluntariado?
                                </h1>
                                <p class="lead  text-white">Te presentamos los volunatiados existentes actualmtente,
                                    escoge el que más te guste y se adapte a tus conocimientos y habilidades. Y recuerda
                                    "El más pequeño acto de amabilidad vale más que la más grande intención" - Oscar Wilde.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Voluntariado 1</h6>
                                    <p class="description mt-3">Aquí va la descripción del voluntariado. Para este ejemplo se va
                                        a realizar una ronda de chequeos medicos en Chapinero.
                                    </p>
                                    <div>
                                        <badge type="primary" rounded>Bogotá</badge>
                                        <badge type="primary" rounded>Día/Mes/Año</badge>
                                        <badge type="primary" rounded>Hora Inicio:Hora Fin</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Leer Más
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Voluntariado 2</h6>
                                    <p class="description mt-3">Nuevamente aquí va la descripción del
                                        segundo voluntariado. Este es en el Banco de Alimentos
                                    </p>
                                    <div>
                                        <badge type="success" rounded>Cali</badge>
                                        <badge type="success" rounded>Día/Mes/Año</badge>
                                        <badge type="success" rounded>Hora Inicio:Hora Fin</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Leer Más
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Voluntariado 3</h6>
                                    <p class="description mt-3">Para este último voluntariado, vamos a ir a la 
                                        fundación "Red de arboles" en la ciudad de Bogotá
                                    </p>
                                    <div>
                                        <badge type="warning" rounded>Bogotá</badge>
                                        <badge type="warning" rounded>Día/Mes/Año</badge>
                                        <badge type="warning" rounded>Hora Inicio:Hora Fin</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>