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
                <div class="col-lg-6">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                               <h3>Iniciar sesión</h3>
                            </div>
                            <br>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>
                                <br><br>
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <hr>
                        <template>
                            <div class="text-center text-muted mb-4">
                            </div>
                            <form role="form">
            <base-alert type="danger" style='display:none;' id='oculto' icon="ni ni-support-16" dismissible>
                <span slot="text"><span v-text="textos"></span></span>
            </base-alert>
                                    
                                      <div class="input-container">
                                        <i class="fa fa-envelope icon"></i>
                                        <input class="input-field" type="email" v-model="usuario.correo" placeholder="Email" name="email">
                                      </div>
                                      
                                      <div class="input-container">
                                        <i class="fa fa-key icon"></i>
                                        <input class="input-field" type="password" v-model="usuario.password" placeholder="Password" name="psw">
                                      </div>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" @click="validacion" class="my-4">Iniciar sesión</base-button>
                                </div>
                            </form>
                        </template>
                                            <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Olvidó su contraseña?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="/register" class="text-light">
                                <small>Registrarse</small>
                            </a>
                        </div>
                    </div>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Firebase from 'firebase';
/*
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAUnExOayQszFkvcjK2eqvSkPtWMWhusUU",
    authDomain: "prueba-vuejs-44df4.firebaseapp.com",
    databaseURL: "https://prueba-vuejs-44df4.firebaseio.com",
    projectId: "prueba-vuejs-44df4",
    storageBucket: "prueba-vuejs-44df4.appspot.com",
    messagingSenderId: "615601326172"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let usersRef = db.ref('users');
*/

export default {
    name : 'login',
    /*firebase: {
        users: usersRef
    },*/
    data(){
        return {
            usuario:{
                correo: '',
                password: ''
            },
            res:'',
            title: 'Logeo'
        }
    },
    methods: {
        validacion: function(){

                let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                //Se muestra un texto a modo de ejemplo, luego va a ser un icono
                if (emailRegex.test(this.usuario.correo)) {
                    if (this.usuario.password=='') {
                        alert("Complete el campo password");

                    } else {

                    document.getElementById('oculto').style.display = 'none';
                    console.log(this.usuario.password +"  "+ this.usuario.correo);
                    // usersRef.push(this.usuario);
                    Firebase.auth().signInWithEmailAndPassword(this.usuario.correo, this.usuario.password).then(
                    function(user) {
                        alert("Well done!");
                        window.location.replace("/landing");
                    },
                    function(err) {
                        alert("El correo o constraseña es inválido");
                    }  
                    );
                    } 


                } else {
                    document.getElementById('oculto').style.display = 'block';
                }
        },
        addUser: function() {

        }

    },
    computed: {
        textos : function(){
            
                let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                //Se muestra un texto a modo de ejemplo, luego va a ser un icono
                if (emailRegex.test(this.usuario.correo)) {
                   this.res = "";
                    document.getElementById('oculto').style.display = 'none';
                } else {
                  this.res = "El formato del correo ingresado es inválido";

                }
                return this.res;
        }
    }

};
</script>
<style>
input:focus{
      text-align: center;
}

input:invalid {
  box-shadow: 0 0 3px 1px red;
}

input:focus:invalid {
  outline: none;
}

.input-container {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 15px;
}

.icon {
    padding: 15px;
    background: #5e72e4;
    color: white;
    min-width: 50px;
    text-align: center;
}

.input-field {
    width: 100%;
    padding: 10px;
    outline: none;
}

.input-field:focus {
    border: 2px solid dodgerblue;
}
</style>
