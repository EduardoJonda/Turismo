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
                            <div class="col-lg-7">
                                <h1 class="display-3  text-white">Realiza tu búsqueda de acuerdo a tus preferencias
                                </h1>
                                <p class="lead  text-white">Seleccione los datos especificos para realizar una busqueda rápida respecto al turismo</p>
                            </div>
                           <div class="col-lg-4">
                             <div class="col-md-14 order-md-4">
                             <img src="https://cambados.es/wp-content/uploads/callejero.png" id="icono_flotador" class="img-fluid floating">
                             </div>
                            </div>

                        </div>
                                              <section class="section section-lg pt-0">
                        <div class="container">
                            <card gradient="info"
                                  no-body
                                  shadow-size="lg"
                                  class="border-0">
                                <div class="p-5">
                                    <div class="row align-items-center">
                                        <div class="col-lg-9">
<div class="container ct-example-row">
  <div class="row">
    <div class="col-sm">
                                          <div class="form-group">
                                            <label class="display-4 text-white">Tipo :</label>
                                            <select class="form-control" v-model="turismo.tipo">
                                             <option selected="true" disabled="disabled">Turismo</option>
                                             <option value="Cultural">Cultural</option>
                                             <option value="Aventura">Aventura</option>
                                            </select>
                                          </div>
    </div>
    <div class="col-sm">
                                          <div class="form-group">
                                            <label class="display-4 text-white">Región :</label>
                                            <select class="form-control" v-model="turismo.region">
                                             <option selected="true" disabled="disabled">Región</option>
                                             <option value="Ica">Ica</option>
                                             <option value="Piura">Piura</option>
                                             <option value="Tacna"> Tacna</option>
                                             <option value="Ayacucho">Ayacucho</option>
                                             <option value="Huánuco">Huánuco</option>
                                             <option value="Cuzco">Cuzco</option>
                                             <option value="Cajamarca">Cajamarca</option>
                                             <option value="Moquegua">Moquegua</option>
                                             <option value="San Martín">San Martín</option>
                                             <option value="Puno">Puno</option>
                                             <option value="Apurímac">Apurímac</option>
                                             <option value="Áncash">Áncash</option>
                                            </select>
                                          </div>
    </div>
    <div class="col-sm">
                                          <div class="form-group">
                                             <label class="display-4 text-white">Fecha :</label>
                                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                                    <flat-picker slot-scope="{focus, blur}"
                                                                 @on-open="focus"
                                                                 @on-close="blur"
                                                                 :config="{allowInput: true}"
                                                                 class="form-control datepicker"
                                                                 v-model="turismo.fecha"
                                                                 id="fecha"
                                                                 >
                                                    </flat-picker>
                                                </base-input>
                                          </div>
    </div>
  </div>
</div>
                                        </div>
                                        <div class="col-lg-3 ml-lg-auto">
                                            <base-button tag="a" type="white" block size="lg" @click="busquedaRapida">
                                                Buscar
                                            </base-button>
                                        </div>
                                    </div>
                                </div>
                            </card>
                        </div>

            <h3 id="resultados_eventos" class="display-3 text-white">Resultados encontrados: 1</h3>
                    </section>
                    </div>
                </div>
                            <!-- 1st Hero Variation -->

            </section>
            <!-- 1st Hero Variation -->
        </div>

        <section class="section section-lg pt-lg-0 mt--300">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid" id="grid-espacio-evento">
                            <div class="col-lg-3" id="acaesssssss" v-for="even in eventos">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="info" rounded class="mb-4">
                                    </icon>
                                    <h4 class="text-default text-uppercase" name="titulo">{{even.titulo}}</h4>
                                    <p class="description mt" name="descripcion">{{even.descripcion}}</p>
                                    <strong  class="primary">Requisito :</strong>
                                    <p class="description mt" name="requisito">{{even.requisito}}</p>
                                    <strong  class="primary">Recomendaciones :</strong>
                                    <p class="description mt" name="recomendaciones">{{even.recomendaciones}}</p>
                                    <strong  class="primary">Detalle del costo :</strong>
                                    <p class="description mt" name="detalles_costo">{{even.detalle_costo}}</p>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-calendar-grid-58"></badge>
                                        <h6 class="mb-0" name="Tiempo">{{even.fecha_inicial}} - {{even.fecha_final}}</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-watch-time"></badge>
                                        <h6 class="mb-0" name="Hora">{{even.hora_inicial}} - {{even.hora_final}}</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-money-coins"></badge>
                                        <h6 class="mb-0" name="costo">S/. {{even.costo}}</h6>
                                    </div>
                                </li>
                            </ul>
                                        <badge type="primary" rounded>{{even.destino}}</badge>
                                        <badge type="primary" rounded>11 personas</badge>

                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Mas detalle
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
        <div class="col-lg-5" id="paginacion">
            <base-pagination :page-count="10" v-model="pagination.default"></base-pagination>
        </div>
        </div>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">

                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Turismo Cultural</h5>
                                    <p>Conozcamos sobre la cultura de Peru junto con otros turistas interesados.</p>
                                    <a href="" class="text-success">Detalles</a>
                                </div>
                            </div>
                        </card>

                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Turismo de Aventura</h5>
                                    <p>Ven y participa en este deporte de ciclismo y obten una experiencia inolvidable.</p>
                                    <a href="" class="text-warning">Detalles</a>
                                </div>
                            </div>
                        </card>

                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Eventos en participacion</h4>
                                <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
                                    thaws every summer, and that process will continue whatever happens.</p>
                            </div>
                        </div>
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
