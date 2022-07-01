<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a>Colteer</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="#/FAQ" class="nav-link" rel="noopener">Preguntas Frecuentes</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/legal" class="nav-link" rel="noopener">Legal</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/People" class="nav-link" rel="noopener">Desarrolladores</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/Contact" class="nav-link" rel="noopener">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.reddit.com/r/Colteer/" class="nav-link" target="_blank" rel="noopener"><img src="@/assets/ColteerImg/Icons/reddit.svg">Blog</a>
                        </li>
                        
                        <li class="nav-item">
                            <a href="https://analytics.google.com/analytics/web/?authuser=3#/a233396016p321537031/admin/streams/table/" class="nav-link" target="_blank" rel="noopener"><img src="@/assets/ColteerImg/Icons/estadisticass.svg">Analytics</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
