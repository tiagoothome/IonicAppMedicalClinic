webpackJsonp([9],{

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ClinicasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClinicasProvider = /** @class */ (function () {
    function ClinicasProvider(afd) {
        this.afd = afd;
        console.log('Hello ClinicasProvider Provider');
    }
    ClinicasProvider.prototype.cadastrarClinica = function (clinicas) {
        return this.afd.list('/Clinicas/').push(clinicas);
    };
    ClinicasProvider.prototype.listarClinica = function () {
        // return this.afd.list('/Clinicas/').valueChanges() método simples
        return this.afd.list('/Clinicas/').snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    ClinicasProvider.prototype.deleteClinica = function (ID) {
        return this.afd.object('/Clinicas/' + ID).remove();
    };
    ClinicasProvider.prototype.atualizarClinica = function (ID, clinicas) {
        return this.afd.object('/Clinicas/' + ID).update(clinicas);
    };
    ClinicasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ClinicasProvider);
    return ClinicasProvider;
}());

//# sourceMappingURL=clinicas.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clinicas_clinicas__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, clinicasProvider) {
        this.navCtrl = navCtrl;
        this.clinicasProvider = clinicasProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.map = this.createMap(this.mapElement);
        this.clinicasProvider.listarClinica().subscribe(function (data) {
            var marker = _this.addMarker(-6.361619303006828, -39.29480050587037);
            marker.setMap(_this.map);
        });
    };
    HomePage.prototype.createMap = function (mapElement) {
        if (mapElement !== null && this.mapElement.nativeElement !== null && google) {
            var options = {
                zoom: 15,
                center: { lat: -6.361619303006828, lng: -39.29480050587037 }
            };
            return new google.maps.Map(mapElement.nativeElement, options);
        }
        return undefined;
    };
    HomePage.prototype.addMarker = function (lat, lng) {
        return new google.maps.Marker({
            position: { lat: lat, lng: lng },
            icon: new google.maps.MarkerImage('https://mt.google.com/vt/icon?psize=16&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1&text=I')
        });
    };
    HomePage.prototype.gerarPDF = function () {
    };
    HomePage.prototype.gerarExcel = function () {
    };
    HomePage.prototype.gerarCSV = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\tiago\OneDrive\Documentos\Documentos\IonicAppMedicalClinic\src\pages\home\home.html"*/'<ion-header>\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">\n  <ion-navbar color= "dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="font-family: \'Dancing Script\', cursive;">Medical Clinic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h2>Conheça a nossa clinica</h2>\n  \n  <ion-grid class="mapa">\n\n    <div #map id="map"></div>\n\n  </ion-grid>\n\n  <ion-fab bottom left>\n    <button ion-fab mini><ion-icon name="arrow-dropright"></ion-icon></button>\n    <ion-fab-list side="right">\n      <button ion-fab (click)="gerarCSV()"><ion-icon name="apps"></ion-icon></button>\n      <button ion-fab (click)="gerarExcel()"><ion-icon name="attach"></ion-icon></button>\n      <button ion-fab (click)="gerarPDF()"><ion-icon name="document"></ion-icon></button>\n\n    </ion-fab-list>\n  </ion-fab>\n\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tiago\OneDrive\Documentos\Documentos\IonicAppMedicalClinic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_clinicas_clinicas__["a" /* ClinicasProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastrar-usuario/cadastrar-usuario.module": [
		555,
		8
	],
	"../pages/clinicas-form/clinicas-form.module": [
		556,
		7
	],
	"../pages/clinicas-list/clinicas-list.module": [
		557,
		6
	],
	"../pages/login/login.module": [
		558,
		5
	],
	"../pages/medicos-form/medicos-form.module": [
		559,
		4
	],
	"../pages/medicos-list/medicos-list.module": [
		560,
		3
	],
	"../pages/pacientes-form/pacientes-form.module": [
		561,
		2
	],
	"../pages/pacientes-list/pacientes-list.module": [
		563,
		1
	],
	"../pages/recuperar-usuario/recuperar-usuario.module": [
		562,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(afa) {
        this.afa = afa;
    }
    UserProvider.prototype.CadastrarUsuario = function (email, senha) {
        return this.afa.auth.createUserWithEmailAndPassword(email, senha);
    };
    UserProvider.prototype.Login = function (email, senha) {
        return this.afa.auth.signInWithEmailAndPassword(email, senha);
    };
    UserProvider.prototype.recuperarSenha = function (email) {
        return this.afa.auth.sendPasswordResetEmail(email);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicosProvider = /** @class */ (function () {
    function MedicosProvider(afd) {
        this.afd = afd;
        console.log('Hello MedicosProvider Provider');
    }
    MedicosProvider.prototype.cadastrarMedico = function (medicos) {
        return this.afd.list('/Medicos/').push(medicos);
    };
    MedicosProvider.prototype.listarMedico = function () {
        // return this.afd.list('/Medicos/').valueChanges() método simples
        return this.afd.list('/Medicos/').snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    MedicosProvider.prototype.deleteMedico = function (ID) {
        return this.afd.object('/Medicos/' + ID).remove();
    };
    MedicosProvider.prototype.atualizarMedico = function (ID, medicos) {
        return this.afd.object('/Medicos/' + ID).update(medicos);
    };
    MedicosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MedicosProvider);
    return MedicosProvider;
}());

//# sourceMappingURL=medicos.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacientesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PacientesProvider = /** @class */ (function () {
    function PacientesProvider(afd) {
        this.afd = afd;
        console.log('Hello PacientesProvider Provider');
    }
    PacientesProvider.prototype.cadastrarPaciente = function (pacientes) {
        return this.afd.list('/Pacientes/').push(pacientes);
    };
    PacientesProvider.prototype.listarPaciente = function () {
        // return this.afd.list('/Pacientes/').valueChanges() método simples
        return this.afd.list('/Pacientes/').snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    PacientesProvider.prototype.deletePaciente = function (ID) {
        return this.afd.object('/Pacientes/' + ID).remove();
    };
    PacientesProvider.prototype.atualizarPaciente = function (ID, pacientes) {
        return this.afd.object('/Pacientes/' + ID).update(pacientes);
    };
    PacientesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PacientesProvider);
    return PacientesProvider;
}());

//# sourceMappingURL=pacientes.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera) {
        this.camera = camera;
        console.log('Hello CameraProvider Provider');
    }
    CameraProvider.prototype.FazerFoto = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        return this.camera.getPicture(options);
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_camera_camera__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_pacientes_pacientes__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_medicos_medicos__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_clinicas_clinicas__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_user__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_export_export__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyB7xfsSXzKMP9YiO8LbsAIQrEmVAsFm0XE",
    authDomain: "fir-clinicaapp.firebaseapp.com",
    databaseURL: "https://fir-clinicaapp-default-rtdb.firebaseio.com",
    projectId: "fir-clinicaapp",
    storageBucket: "fir-clinicaapp.appspot.com",
    messagingSenderId: "115283997179",
    appId: "1:115283997179:web:80c50013acc4c421e95b5e",
    measurementId: "G-Q21HM57SJD"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule', name: 'CadastrarUsuarioPage', segment: 'cadastrar-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinicas-form/clinicas-form.module#ClinicasFormPageModule', name: 'ClinicasFormPage', segment: 'clinicas-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinicas-list/clinicas-list.module#ClinicasListPageModule', name: 'ClinicasListPage', segment: 'clinicas-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicos-form/medicos-form.module#MedicosFormPageModule', name: 'MedicosFormPage', segment: 'medicos-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicos-list/medicos-list.module#MedicosListPageModule', name: 'MedicosListPage', segment: 'medicos-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pacientes-form/pacientes-form.module#PacientesFormPageModule', name: 'PacientesFormPage', segment: 'pacientes-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar-usuario/recuperar-usuario.module#RecuperarUsuarioPageModule', name: 'RecuperarUsuarioPage', segment: 'recuperar-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pacientes-list/pacientes-list.module#PacientesListPageModule', name: 'PacientesListPage', segment: 'pacientes-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__providers_pacientes_pacientes__["a" /* PacientesProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_medicos_medicos__["a" /* MedicosProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_clinicas_clinicas__["a" /* ClinicasProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_export_export__["a" /* ExportProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Pacientes', component: 'PacientesListPage' },
            { title: 'Médicos', component: 'MedicosListPage' },
            { title: 'Clinicas', component: 'ClinicasListPage' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.get('usuario').then(function (_usuario) {
                if (_usuario && _usuario.length > 0) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            }).catch(function (error) {
                _this.rootPage = 'LoginPage';
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.Sair = function () {
        var _this = this;
        this.storage.remove('usuario').then(function (sucesso) {
            var mensagem = "Usuário deslogado com sucesso";
            _this.showAlert(mensagem);
            _this.nav.setRoot('LoginPage');
        }).catch(function (erro) {
            var mensagem = "Ocorreu um erro ao deslogar";
            _this.showAlert(mensagem);
        });
    };
    MyApp.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: mensagem,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\tiago\OneDrive\Documentos\Documentos\IonicAppMedicalClinic\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="Sair()">Sair</button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\tiago\OneDrive\Documentos\Documentos\IonicAppMedicalClinic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf_autotable__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportProvider = /** @class */ (function () {
    function ExportProvider() {
    }
    ExportProvider.prototype.gerarCSV = function (jsonArr, nomeArquivo) {
        var csv = __WEBPACK_IMPORTED_MODULE_2_papaparse__["unparse"](jsonArr);
        //this.saveAsFile(csv, ExportProvider.CSV_TYPE, nomeArquivo + ExportProvider.CSV_EXTENSION);
    };
    ExportProvider.prototype.gerarExcel = function (jsonArr, nomeArquivo) {
        var worksheet = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].json_to_sheet(jsonArr);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_1_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //this.saveAsFile(excelBuffer, ExportProvider.EXCEL_TYPE, nomeArquivo + ExportProvider.EXCEL_EXTENSION);
    };
    ExportProvider.prototype.gerarPDF = function (jsonArr, nomeArquivo) {
        var headerText = "Cursos";
        var col = [];
        var rows = [];
        Object.keys(jsonArr[0]).forEach(function (key) {
            col.push(key);
            // [ch, lat, lng, local, ...]
        });
        var _loop_1 = function (i) {
            var element = jsonArr[i];
            var tempArr = [];
            // [ [120, -4.39, -39.31, 'IFCE', ...],
            //   [120, -4.39, -39.31, 'IFCE', ...],
            //   ... ]
            Object.keys(element).forEach(function (key) {
                var value = element[key];
                tempArr.push(value);
            });
            rows.push(tempArr);
        };
        for (var i = 0; i < jsonArr.length; i++) {
            _loop_1(i);
        }
        //let doc = new jsPDF('landscape', 'pt', 'a4');
        //doc.setFontSize(8);
        // HEADER
        //doc.setFontSize(16);
        //doc.setTextColor(40);
        //doc.setFontStyle('normal');
        //doc.text(headerText, doc.internal.pageSize.getWidth()/2, 45, { align: "center" });// set your margins
        // CONTEUDO
        //doc.autoTable(col, rows, {
        //margin: {top: 65}
        //});
        // FOOTER - PAGE NUMBERS
        //const pages = doc.internal.getNumberOfPages();
        //const pageWidth = doc.internal.pageSize.width;  //Optional
        //const pageHeight = doc.internal.pageSize.height;  //Optional
        //doc.setFontSize(10);  //Optional
        //for (let j = 1; j < pages + 1 ; j++) {
        //let horizontalPos = pageWidth / 2;  //Can be fixed number
        //let verticalPos = pageHeight - 10;  //Can be fixed number
        //doc.setPage(j);
        //doc.text(`${j} - ${pages}`, horizontalPos, verticalPos, {align: 'center'});
    };
    ExportProvider.EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    ExportProvider.EXCEL_EXTENSION = '.xlsx';
    ExportProvider.CSV_TYPE = 'text/plain';
    ExportProvider.CSV_EXTENSION = '.csv';
    ExportProvider.PDF_TYPE = 'application/pdf';
    ExportProvider.PDF_EXTENSION = '.pdf';
    ExportProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ExportProvider);
    return ExportProvider;
}());

//private saveAsFile(buffer: any, _type, fileName: string) {
//const data: Blob = new Blob([buffer], {type: _type});
//FileSaver.saveAs(data, fileName);
//}
//} 
//# sourceMappingURL=export.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[352]);
//# sourceMappingURL=main.js.map