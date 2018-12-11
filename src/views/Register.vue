<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center">
                               <h3>Registro</h3>
                            </div>
                            <div class="btn-wrapper text-center">
                                  <br>
                                    <div class="container ct-example-row">
                                      <div class="row">
                                        <div class="col-sm">
                                            <br>
                                        <base-button type="neutral">
                                            <img slot="icon" src="img/icons/common/google.svg">
                                            Google
                                        </base-button>
                                        </div>
                                      </div>
                                    </div>
                            </div>
                            <hr>
                        </template>
                           <hr>
                        <template>
                            <form role="form">
                                <div class="container ct-example-row">
                                     <label>Nombres y apellidos :</label>
                                  <div class="row">
                                    <div class="col">
                                         <base-input alternative
                                            class="mb-3"
                                            placeholder="Nombre"
                                            v-model="usuario.nombre"
                                            addon-left-icon="ni ni-circle-08">
                                         </base-input>
                                    </div>
                                    <div class="col">
                                         <base-input alternative
                                            class="mb-3"
                                            placeholder="Apellido"
                                            v-model="usuario.apellido">
                                         </base-input>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col">
                                          <div class="form-group">
                                             <label for="exampleFormControlSelect1">Fecha de nacimineto :</label>
                                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                                    <flat-picker slot-scope="{focus, blur}"
                                                                 @on-open="focus"
                                                                 @on-close="blur"
                                                                 :config="{allowInput: true}"
                                                                 class="form-control datepicker"
                                                                 v-model="dates.simple"
                                                                 id="fecha"
                                                                 >
                                                    </flat-picker>
                                                </base-input>
                                          </div>
                                    </div>
                                    <div class="col">
                                          <div class="form-group">
                                            <label for="exampleFormControlSelect1">Seleccione su nacionalidad :</label>
                <select name="pais" class="form-control">
                <option selected="true" disabled="disabled">País</option>
                <option value="Afganistán" id="AF">Afganistán</option>
                <option value="Albania" id="AL">Albania</option>
                <option value="Alemania" id="DE">Alemania</option>
                <option value="Andorra" id="AD">Andorra</option>
                <option value="Angola" id="AO">Angola</option>
                <option value="Anguila" id="AI">Anguila</option>
                <option value="Antártida" id="AQ">Antártida</option>
                <option value="Antigua y Barbuda" id="AG">Antigua y Barbuda</option>
                <option value="Antillas holandesas" id="AN">Antillas holandesas</option>
                <option value="Arabia Saudí" id="SA">Arabia Saudí</option>
                <option value="Argelia" id="DZ">Argelia</option>
                <option value="Argentina" id="AR">Argentina</option>
                <option value="Armenia" id="AM">Armenia</option>
                <option value="Aruba" id="AW">Aruba</option>
                <option value="Australia" id="AU">Australia</option>
                <option value="Austria" id="AT">Austria</option>
                <option value="Azerbaiyán" id="AZ">Azerbaiyán</option>
                <option value="Bahamas" id="BS">Bahamas</option>
                <option value="Bahrein" id="BH">Bahrein</option>
                <option value="Bangladesh" id="BD">Bangladesh</option>
                <option value="Barbados" id="BB">Barbados</option>
                <option value="Bélgica" id="BE">Bélgica</option>
                <option value="Belice" id="BZ">Belice</option>
                <option value="Benín" id="BJ">Benín</option>
                <option value="Bermudas" id="BM">Bermudas</option>
                <option value="Bhután" id="BT">Bhután</option>
                <option value="Bielorrusia" id="BY">Bielorrusia</option>
                <option value="Birmania" id="MM">Birmania</option>
                <option value="Bolivia" id="BO">Bolivia</option>
                <option value="Bosnia y Herzegovina" id="BA">Bosnia y Herzegovina</option>
                <option value="Botsuana" id="BW">Botsuana</option>
                <option value="Brasil" id="BR">Brasil</option>
                <option value="Brunei" id="BN">Brunei</option>
                <option value="Bulgaria" id="BG">Bulgaria</option>
                <option value="Burkina Faso" id="BF">Burkina Faso</option>
                <option value="Burundi" id="BI">Burundi</option>
                <option value="Cabo Verde" id="CV">Cabo Verde</option>
                <option value="Camboya" id="KH">Camboya</option>
                <option value="Camerún" id="CM">Camerún</option>
                <option value="Canadá" id="CA">Canadá</option>
                <option value="Chad" id="TD">Chad</option>
                <option value="Chile" id="CL">Chile</option>
                <option value="China" id="CN">China</option>
                <option value="Chipre" id="CY">Chipre</option>
                <option value="Ciudad estado del Vaticano" id="VA">Ciudad estado del Vaticano</option>
                <option value="Colombia" id="CO">Colombia</option>
                <option value="Comores" id="KM">Comores</option>
                <option value="Congo" id="CG">Congo</option>
                <option value="Corea" id="KR">Corea</option>
                <option value="Corea del Norte" id="KP">Corea del Norte</option>
                <option value="Costa del Marfíl" id="CI">Costa del Marfíl</option>
                <option value="Costa Rica" id="CR">Costa Rica</option>
                <option value="Croacia" id="HR">Croacia</option>
                <option value="Cuba" id="CU">Cuba</option>
                <option value="Dinamarca" id="DK">Dinamarca</option>
                <option value="Djibouri" id="DJ">Djibouri</option>
                <option value="Dominica" id="DM">Dominica</option>
                <option value="Ecuador" id="EC">Ecuador</option>
                <option value="Egipto" id="EG">Egipto</option>
                <option value="El Salvador" id="SV">El Salvador</option>
                <option value="Emiratos Arabes Unidos" id="AE">Emiratos Arabes Unidos</option>
                <option value="Eritrea" id="ER">Eritrea</option>
                <option value="Eslovaquia" id="SK">Eslovaquia</option>
                <option value="Eslovenia" id="SI">Eslovenia</option>
                <option value="España" id="ES">España</option>
                <option value="Estados Unidos" id="US">Estados Unidos</option>
                <option value="Estonia" id="EE">Estonia</option>
                <option value="c" id="ET">Etiopía</option>
                <option value="Ex-República Yugoslava de Macedonia" id="MK">Ex-República Yugoslava de Macedonia</option>
                <option value="Filipinas" id="PH">Filipinas</option>
                <option value="Finlandia" id="FI">Finlandia</option>
                <option value="Francia" id="FR">Francia</option>
                <option value="Gabón" id="GA">Gabón</option>
                <option value="Gambia" id="GM">Gambia</option>
                <option value="Georgia" id="GE">Georgia</option>
                <option value="Georgia del Sur y las islas Sandwich del Sur" id="GS">Georgia del Sur y las islas Sandwich del Sur</option>
                <option value="Ghana" id="GH">Ghana</option>
                <option value="Gibraltar" id="GI">Gibraltar</option>
                <option value="Granada" id="GD">Granada</option>
                <option value="Grecia" id="GR">Grecia</option>
                <option value="Groenlandia" id="GL">Groenlandia</option>
                <option value="Guadalupe" id="GP">Guadalupe</option>
                <option value="Guam" id="GU">Guam</option>
                <option value="Guatemala" id="GT">Guatemala</option>
                <option value="Guayana" id="GY">Guayana</option>
                <option value="Guayana francesa" id="GF">Guayana francesa</option>
                <option value="Guinea" id="GN">Guinea</option>
                <option value="Guinea Ecuatorial" id="GQ">Guinea Ecuatorial</option>
                <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                <option value="Haití" id="HT">Haití</option>
                <option value="Holanda" id="NL">Holanda</option>
                <option value="Honduras" id="HN">Honduras</option>
                <option value="Hong Kong R. A. E" id="HK">Hong Kong R. A. E</option>
                <option value="Hungría" id="HU">Hungría</option>
                <option value="India" id="IN">India</option>
                <option value="Indonesia" id="ID">Indonesia</option>
                <option value="Irak" id="IQ">Irak</option>
                <option value="Irán" id="IR">Irán</option>
                <option value="Irlanda" id="IE">Irlanda</option>
                <option value="Isla Bouvet" id="BV">Isla Bouvet</option>
                <option value="Isla Christmas" id="CX">Isla Christmas</option>
                <option value="Isla Heard e Islas McDonald" id="HM">Isla Heard e Islas McDonald</option>
                <option value="Islandia" id="IS">Islandia</option>
                <option value="Islas Caimán" id="KY">Islas Caimán</option>
                <option value="Islas Cook" id="CK">Islas Cook</option>
                <option value="Islas de Cocos o Keeling" id="CC">Islas de Cocos o Keeling</option>
                <option value="Islas Faroe" id="FO">Islas Faroe</option>
                <option value="Islas Fiyi" id="FJ">Islas Fiyi</option>
                <option value="Islas Malvinas Islas Falkland" id="FK">Islas Malvinas Islas Falkland</option>
                <option value="Islas Marianas del norte" id="MP">Islas Marianas del norte</option>
                <option value="Islas Marshall" id="MH">Islas Marshall</option>
                <option value="Islas menores de Estados Unidos" id="UM">Islas menores de Estados Unidos</option>
                <option value="Islas Palau" id="PW">Islas Palau</option>
                <option value="Islas Salomón" d="SB">Islas Salomón</option>
                <option value="Islas Tokelau" id="TK">Islas Tokelau</option>
                <option value="Islas Turks y Caicos" id="TC">Islas Turks y Caicos</option>
                <option value="Islas Vírgenes EE.UU." id="VI">Islas Vírgenes EE.UU.</option>
                <option value="Islas Vírgenes Reino Unido" id="VG">Islas Vírgenes Reino Unido</option>
                <option value="Israel" id="IL">Israel</option>
                <option value="Italia" id="IT">Italia</option>
                <option value="Jamaica" id="JM">Jamaica</option>
                <option value="Japón" id="JP">Japón</option>
                <option value="Jordania" id="JO">Jordania</option>
                <option value="Kazajistán" id="KZ">Kazajistán</option>
                <option value="Kenia" id="KE">Kenia</option>
                <option value="Kirguizistán" id="KG">Kirguizistán</option>
                <option value="Kiribati" id="KI">Kiribati</option>
                <option value="Kuwait" id="KW">Kuwait</option>
                <option value="Laos" id="LA">Laos</option>
                <option value="Lesoto" id="LS">Lesoto</option>
                <option value="Letonia" id="LV">Letonia</option>
                <option value="Líbano" id="LB">Líbano</option>
                <option value="Liberia" id="LR">Liberia</option>
                <option value="Libia" id="LY">Libia</option>
                <option value="Liechtenstein" id="LI">Liechtenstein</option>
                <option value="Lituania" id="LT">Lituania</option>
                <option value="Luxemburgo" id="LU">Luxemburgo</option>
                <option value="Macao R. A. E" id="MO">Macao R. A. E</option>
                <option value="Madagascar" id="MG">Madagascar</option>
                <option value="Malasia" id="MY">Malasia</option>
                <option value="Malawi" id="MW">Malawi</option>
                <option value="Maldivas" id="MV">Maldivas</option>
                <option value="Malí" id="ML">Malí</option>
                <option value="Malta" id="MT">Malta</option>
                <option value="Marruecos" id="MA">Marruecos</option>
                <option value="Martinica" id="MQ">Martinica</option>
                <option value="Mauricio" id="MU">Mauricio</option>
                <option value="Mauritania" id="MR">Mauritania</option>
                <option value="Mayotte" id="YT">Mayotte</option>
                <option value="México" id="MX">México</option>
                <option value="Micronesia" id="FM">Micronesia</option>
                <option value="Moldavia" id="MD">Moldavia</option>
                <option value="Mónaco" id="MC">Mónaco</option>
                <option value="Mongolia" id="MN">Mongolia</option>
                <option value="Montserrat" id="MS">Montserrat</option>
                <option value="Mozambique" id="MZ">Mozambique</option>
                <option value="Namibia" id="NA">Namibia</option>
                <option value="Nauru" id="NR">Nauru</option>
                <option value="Nepal" id="NP">Nepal</option>
                <option value="Nicaragua" id="NI">Nicaragua</option>
                <option value="Níger" id="NE">Níger</option>
                <option value="Nigeria" id="NG">Nigeria</option>
                <option value="Niue" id="NU">Niue</option>
                <option value="Norfolk" id="NF">Norfolk</option>
                <option value="Noruega" id="NO">Noruega</option>
                <option value="Nueva Caledonia" id="NC">Nueva Caledonia</option>
                <option value="Nueva Zelanda" id="NZ">Nueva Zelanda</option>
                <option value="Omán" id="OM">Omán</option>
                <option value="Panamá" id="PA">Panamá</option>
                <option value="Papua Nueva Guinea" id="PG">Papua Nueva Guinea</option>
                <option value="Paquistán" id="PK">Paquistán</option>
                <option value="Paraguay" id="PY">Paraguay</option>
                <option value="Perú" id="PE">Perú</option>
                <option value="Pitcairn" id="PN">Pitcairn</option>
                <option value="Polinesia francesa" id="PF">Polinesia francesa</option>
                <option value="Polonia" id="PL">Polonia</option>
                <option value="Portugal" id="PT">Portugal</option>
                <option value="Puerto Rico" id="PR">Puerto Rico</option>
                <option value="Qatar" id="QA">Qatar</option>
                <option value="Reino Unido" id="UK">Reino Unido</option>
                <option value="República Centroafricana" id="CF">República Centroafricana</option>
                <option value="República Checa" id="CZ">República Checa</option>
                <option value="República de Sudáfrica" id="ZA">República de Sudáfrica</option>
                <option value="República Democrática del Congo Zaire" id="CD">República Democrática del Congo Zaire</option>
                <option value="República Dominicana" id="DO">República Dominicana</option>
                <option value="Reunión" id="RE">Reunión</option>
                <option value="Ruanda" id="RW">Ruanda</option>
                <option value="Rumania" id="RO">Rumania</option>
                <option value="Rusia" id="RU">Rusia</option>
                <option value="Samoa" id="WS">Samoa</option>
                <option value="Samoa occidental" id="AS">Samoa occidental</option>
                <option value="San Kitts y Nevis" id="KN">San Kitts y Nevis</option>
                <option value="San Marino" id="SM">San Marino</option>
                <option value="San Pierre y Miquelon" id="PM">San Pierre y Miquelon</option>
                <option value="San Vicente e Islas Granadinas" id="VC">San Vicente e Islas Granadinas</option>
                <option value="Santa Helena" id="SH">Santa Helena</option>
                <option value="Santa Lucía" id="LC">Santa Lucía</option>
                <option value="Santo Tomé y Príncipe" id="ST">Santo Tomé y Príncipe</option>
                <option value="Senegal" id="SN">Senegal</option>
                <option value="Serbia y Montenegro" id="YU">Serbia y Montenegro</option>
                <option value="Sychelles" id="SC">Seychelles</option>
                <option value="Sierra Leona" id="SL">Sierra Leona</option>
                <option value="Singapur" id="SG">Singapur</option>
                <option value="Siria" id="SY">Siria</option>
                <option value="Somalia" id="SO">Somalia</option>
                <option value="Sri Lanka" id="LK">Sri Lanka</option>
                <option value="Suazilandia" id="SZ">Suazilandia</option>
                <option value="Sudán" id="SD">Sudán</option>
                <option value="Suecia" id="SE">Suecia</option>
                <option value="Suiza" id="CH">Suiza</option>
                <option value="Surinam" id="SR">Surinam</option>
                <option value="Svalbard" id="SJ">Svalbard</option>
                <option value="Tailandia" id="TH">Tailandia</option>
                <option value="Taiwán" id="TW">Taiwán</option>
                <option value="Tanzania" id="TZ">Tanzania</option>
                <option value="Tayikistán" id="TJ">Tayikistán</option>
                <option value="Territorios británicos del océano Indico" id="IO">Territorios británicos del océano Indico</option>
                <option value="Territorios franceses del sur" id="TF">Territorios franceses del sur</option>
                <option value="Timor Oriental" id="TP">Timor Oriental</option>
                <option value="Togo" id="TG">Togo</option>
                <option value="Tonga" id="TO">Tonga</option>
                <option value="Trinidad y Tobago" id="TT">Trinidad y Tobago</option>
                <option value="Túnez" id="TN">Túnez</option>
                <option value="Turkmenistán" id="TM">Turkmenistán</option>
                <option value="Turquía" id="TR">Turquía</option>
                <option value="Tuvalu" id="TV">Tuvalu</option>
                <option value="Ucrania" id="UA">Ucrania</option>
                <option value="Uganda" id="UG">Uganda</option>
                <option value="Uruguay" id="UY">Uruguay</option>
                <option value="Uzbekistán" id="UZ">Uzbekistán</option>
                <option value="Vanuatu" id="VU">Vanuatu</option>
                <option value="Venezuela" id="VE">Venezuela</option>
                <option value="Vietnam" id="VN">Vietnam</option>
                <option value="Wallis y Futuna" id="WF">Wallis y Futuna</option>
                <option value="Yemen" id="YE">Yemen</option>
                <option value="Zambia" id="ZM">Zambia</option>
                <option value="Zimbabue" id="ZW">Zimbabue</option>
                </select>
                                          </div>
                                    </div>
                                    <div class="col">
                                          <div class="form-group">
                                            <label>Seleccione el género :</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                             <option selected="true" disabled="disabled">Género</option>
                                             <option value="Masculino">Masculino</option>
                                             <option value="Femenino">Femenino</option>
                                            </select>
                                          </div>
                                    </div>
                                  </div>

                                 <div class="row">
                                    <div class="col">
                                     <label>Correo electrónico :</label>
                                    <base-input alternative
                                                class="mb-3"
                                                type="email"
                                                placeholder="Email"
                                                v-model="usuario.correo"
                                                addon-left-icon="ni ni-email-83">
                                    </base-input>
                                    </div>
                                  </div>
                                      <label>Nueva contraseña :</label>
                                 <div class="row">
                                    <div class="col">
                                      <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                             v-model="usuario.password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                      </base-input>
                                    </div>
                                    <div class="col">
                                      <base-input alternative
                                            type="password"
                                            placeholder="Escriba nuevamente su password"
                                             v-model="usuario.password_2">
                                      </base-input>
                                    </div>
                                  </div>
                                   <div class="text-muted font-italic">
                                        <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                        </small>
                                    </div>
                                    <div class="text-center">
                                        <br>
                                            <base-checkbox v-model="chkprueba">
                                                <span>Estoy de acuerdo con la 
                                                    <a href="">Política de privacidad</a>
                                                </span>
                                            </base-checkbox>
                                    </div>
                                </div>
                                <h1 v-text="aha">asdad</h1>
                                    <div class="text-center">
                                                <base-button type="primary" 
                                                id="btncrear_user"
                                                @click="registrarUsuario" 
                                                disabled class="my-4">Crear nueva cuenta</base-button>
                                    </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Firebase from 'firebase';
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import $ from 'jquery';

export default {
    name: "register",
    model: {
    prop: "checked"
    },
    beforeCreate: function () {
        /*var hoy = new Date();
        this.dia = hoy.getDate();
        this.mes = hoy.getMonth()+1;
        this.anho = hoy.getFullYear();
        this.anho +"-"+this.mes+"-"+this.dia,*/
    },
    components: {
     flatPicker
    },
  props: {
    checked: {
      type: [Array, Boolean],
      description: "Whether checkbox is checked"
    },
    disabled: {
      type: Boolean,
      description: "Whether checkbox is disabled"
    },
    inline: {
      type: Boolean,
      description: "Whether checkbox is inline"
    }
  },
    data(){
        return {
                check: "false",
             cbId: "",
             chkprueba: null,
             touched: false,
            dia:"",
            res:'',
            mes:"",
            dia:"",
            usuario:{
                nombre: '',
                apellido: '',
                genero: '',
                nacionalidad: '',
                f_nacimiento: '',
                correo: '',
                password: '',
                password_2: ''
            },
      dates: {
        simple: "1950-01-01"
      }
    }
    },
    methods: {
    registrarUsuario() {
        Firebase.auth().createUserWithEmailAndPassword(this.usuario.correo, this.usuario.password).then(
            function(user) {
                alert("Se registro satisfactoriamente");
                window.location.replace("/login");
            },
            function(err) {
                alert('Hubo un error' + err.message);
        }
        );
    }
    },
    computed: {
            model: {
      get() {
        return this.checked;
      },
      set(check) {
        if (!this.touched) {
          this.touched = true;
        }
        this.$emit("input", check);
      }
    },
        inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
    },
    aha: function() {
    // Comprobacion usando funcion .is()
    if ( this.chkprueba == true ) {
        console.log("Checkbox seleccionado");
         document.getElementById('btncrear_user').disabled=false;
    } else if (this.chkprueba == false){
        document.getElementById('btncrear_user').disabled=true;
    } else {

    }
            return null;
        }
    },
    created() {
    this.cbId = Math.random()
      .toString(16)
      .slice(2);
  }
};
</script>
<style>
.dropdown {
  list-style-type: none;
}

.dropdown .dropdown-toggle {
  cursor: pointer;
}
 #fecha{
          text-align: center;
 }


</style>
