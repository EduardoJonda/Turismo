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
                        <h3 class="display-3 text-white">CONTÁCTENOS</h3>
                        <p class="lead text-white">Contáctese con nosotros para cualquier cosulta, recomendaciones o queja. Le responderemos lo más rápido posible</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Tienes alguna duda? </h4>
                            <p class="mt-0">Te invito a redactar un mensaje para solicionar su duda.</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Ingrese su nombre"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Correo electrónico"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Escriba su duda..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Enviar mensaje
                            </base-button>
                        </card>
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
