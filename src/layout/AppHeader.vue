<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="/"><strong id="title">TUTURIST</strong>
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <strong id="subtitle">TUTURIST</strong>
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Eventos</span>
                    </a>
                    <div class="dropdown-menu-inner">
                       <div id="cabeceraVerEvent">
                        <a href="/eventos"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i class="ni ni-planet"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-info mb-md-1">Ver Eventos</h6>
                                <p class="description d-none d-md-inline-block mb-0">Enterate de todos los eventos turísticos disponibles y obten una experiencia inolvidable participando y conociendo a muchas personas.</p>
                            </div>
                        </a></div>
                        <br>
                        <div id="cabeceraCrearEvent">
                        <a href="/eventos/crear" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i class="ni ni-send"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-info mb-md-1">Crear un evento</h5>
                                <p class="description d-none d-md-inline-block mb-0">Crea tu propio evento turístico para conocer a personas que tengan los mismo gustos o invita a tus compañeros o familia.</p>
                            </div>
                        </a></div>
                        <br>
                        <div id="cabeceraFavoritoEventTurist">
                         <a href="/favoritos"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i class="ni ni-like-2"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-info mb-md-1">Mis favoritos</h5>
                                <p class="description d-none d-md-inline-block mb-0">Todos tus lugares turisticas añadidos como favorito se encontraran agragados en opcion de "Mis favoritos".</p>
                            </div>
                        </a></div>
                        <br>
                        <div id="cabeceraLogrosEvento">
                        <a href="/logros" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i class="ni ni-trophy"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-info mb-md-1">Mis logros</h5>
                                <p class="description d-none d-md-inline-block mb-0">Todos los logros desbloqueados lo podras visualizarlo por esta sesión. Recuerda que por cada 50 logros puedes ganar bonificaciones como un viaje gratis para que lleves a tus amigos a un viaje turistico.</p>
                            </div>
                        </a>
                        </div>
                    </div>
                </base-dropdown>
                <!--HOSPEDAJE-->
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Hospedaje</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <div id="cabeceraVerHospedaje" ><a href="hospedajes" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-pin-3"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-warning mb-md-1">Ver Hospedaje</h6>
                                <p class="description d-none d-md-inline-block mb-0">Encuentra un hospedaje adecuado a tus necesidades en la region, fecha y pago especificado previamente por los Anfitriones que te brindaras su espacio.</p>
                            </div>
                        </a></div>
                        <br>
                        <div id="cabeceraCrearHospedaje"><a href="hospedaje/crear" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-square-pin"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Crear un Hospedaje</h5>
                                <p class="description d-none d-md-inline-block mb-0">Brinda un espacio de hospedaje para los turistas. Es importante cumplas con algunas restricciones antes de brindar el servicio.</p>
                            </div>
                        </a></div>
                        <br>
                        <div id="cabeceraFavoritoHospedaje"><a href="/hospedaje/favoritos" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-tag"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Hospedaje favoritos</h5>
                                <p class="description d-none d-md-inline-block mb-0">Todos tus hospedajes añadidos como favoritos lo podras visualizar mediante esta sesión, con un acceso rápido a la información del hospedaje sin necesidad buscar nuevamente.</p>
                            </div>
                        </a></div>
                        <br>
                        <div id="cabeceraReservaHospedaje"><a href="/hospedaje/reservaciones" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-collection"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Reservaciones</h5>
                                <p class="description d-none d-md-inline-block mb-0">Verifica el estado de las reservas realizadas al hospedaje que seleccionaste.</p>
                            </div>
                        </a></div>
                    </div>
                </base-dropdown>


                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="/notificaciones" data-toggle="tooltip" title="Notificaciones">
                       <i class="fa fa-envelope"></i>
                        <span class="nav-link-inner--text d-lg-none">Notificaciones</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="/perfil/configuracion" data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-cogs"></i>
                        <span class="nav-link-inner--text d-lg-none">Configuración</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="/login"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-user-circle mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Iniciar sesión</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
#subtitle {
    color: blue;
    font-size: x-large;

}
#title {
        font-size: x-large;
}
</style>
