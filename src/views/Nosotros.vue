<template>
    <div>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Nosotros</h2>
                        <h2 class="display-3 text-white">TUTURIST STARTUP</h2>
                        <p class="lead text-white">Somos un startup sin fines de lucro que pretende incentivar el turismo Peruano de manera segura, entretenida y diferente.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Misión</h5>
                        <p class="text-white mt-3">Aplicar las ultimas tecnologías y ofrecer un servicio de calidad para que nuestros usurios se encuentren satisfecho con nuestra plataforma y tengan una mejor experiencia en el turismo.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Visión</h5>
                        <p class="text-white mt-3">Crecer y aplicar nuestro modelo de negocio a nivel internacional en los países de latinoamerica para incentivar el turismo hacia estos países y obtener valores reconocimientos por los resultados de nuestras plataforma.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Fortalezas</h5>
                        <ul>
                            <li class="text-white">Somos innovadores</li>
                            <li class="text-white">Creémos aplicar la calidad en el servicio es un concepto fundamental</li>
                            <li class="text-white">Buscamos mejorar como organización</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import firebase from '../Firebase';

import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {

  name: "eventos",
  components: {
    flatPicker
  },
    data(){
        return {
                  pagination: {
        default: 1,
        danger: 3
      },
             defaultPagesToDisplay: 5,
                  fields: {
        descripcion: { label: 'Title', sortable: true, 'class': 'text-left' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
            eventos: [],
      ref: firebase.firestore().collection('eventos'),
              turismo: {
                tipo: "Turismo",
                region: "Región",
                fecha: "1950-01-01"
              },
              dates: {
                simple: "1950-01-01"
              }
        }
    },
      created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.eventos = [];
      querySnapshot.forEach((doc) => {
        this.eventos.push({
          key: doc.id,
          descripcion: doc.data().descripcion,
          destino: doc.data().destino,
          detalle_costo: doc.data().detalle_costo,
          fecha_final: doc.data().fecha_final,
          fecha_inicial: doc.data().fecha_inicial,
          costo: doc.data().costo,
          hora_final: doc.data().hora_final,
          hora_inicial: doc.data().hora_inicial,
          recomendaciones: doc.data().recomendaciones,
          requisito: doc.data().requisito,
          timestamp: doc.data().timestamp,
          titulo: doc.data().titulo,
          user_uid: doc.data().user_uid
        });
      });
    });
  },
    methods: {
        busquedaRapida() {
            alert("Detalles :" + this.turismo.tipo +"\n"+ this.turismo.region +"\n"+ this.turismo.fecha)
        }
  },
    computed: {
  }
};
</script>
<style>
    #icono_flotador {
       margin-top: -60px;
    }
     #grid-espacio-evento {
      width: 1660px;
    margin-left: -310px;
    }

    #resultados_eventos {
    margin-left: 260px;
    margin-top: 120px;
    }
    #paginacion {
      margin-top: -70px;
      margin-left: 370px;
    }
</style>
