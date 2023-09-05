
// KHU VUC LAY CLASS DE LAM VIEC.......

// class dieu huong menu lv1 models REVUELTO
const MENU_lv2 = document.querySelector('.MENU-LV2');
const modelTab = document.querySelector('#MODELS');
const BEYOND = document.querySelector('#BEYOND');
const OWNERSHIP = document.querySelector('#OWNERSHIP');
const MOTOSPORT = document.querySelector('#MOTOSPORT');
const PRE_OWNED = document.querySelector('.PRE-OWNED')
const STORE = document.querySelector('#STORE');
const FEEDBACK = document.querySelector('#FEEDBACK');
const nav = document.querySelector('nav');
const modelElement = document.querySelector('.MODELS');
const OWNERSHIP_element = document.querySelector('.OWNERSHIP');
const MOTOSPORT_element = document.querySelector('.MOTOSPORT');
const REVUELTO = document.querySelector('.REVUELTO');
const MODELS_element_REVUELTO = document.querySelector('.MODELS_element-REVUELTO');
const REVUELTO_content_START_ELEMENT = document.querySelector('.REVUELTO-content-START-ELEMENT');
const REVUELTO_SPEED = document.querySelectorAll('.SPEED-ELEMENT-content');
const REVUELTO_information_content = document.querySelector('.REVUELTO-information-content');
const fuel_infor_conten = document.querySelector('.fuel_infor_conten');
// class DIEU HUONG MENU LV1 , LV2 MODELS CONCEPT

const CONCEPT = document.querySelector('.CONCEPT');
const MODLES_CONCEPT = document.querySelector('.MODLES-CONCEPT');
const CONCEPT_TERZO_MILLENNIO = document.querySelector('#CONCEPT-TERZO-MILLENNIO')
const CONCEPT_ASTERION = document.querySelector('#CONCEPT-ASTERION');
const CONCEPT_ESTOQUE = document.querySelector('#CONCEPT-ESTOQUE');

//END

//  class hien thong tin xe MODELS CONCEPT


const CONCEPT_information = document.querySelector('.CONCEPT-information');
const CONCEPT_GALLERY = document.querySelector('.CONCEPT-GALLERY');
const fuel_infor_CONCEPT_conten = document.querySelector('.fuel_infor-CONCEPT-conten')
//END

// class DIEU HUONG MENU LV1 , LV2 MODELS URUS

const URUS = document.querySelector('.URUS');
const MODLES_URUS = document.querySelector('.MODLES-URUS');
const URUS_S = document.querySelector('#URUS-S')
const URUS_PERFORMANTE = document.querySelector('#URUS-PERFORMANTE');

//END

//  class hien thong tin xe MODELS URUS

const URUS_content_empty = document.querySelector('.URUS-content-empty');
const URUS_content_START = document.querySelector('.URUS-content-START');
const URUS_SPEED = document.querySelector('.URUS-SPEED');
const URUS_SPEED_num = document.querySelector('.URUS-SPEED-num');
const URUS_information = document.querySelector('.URUS-information');
const URUS_SPEED_power = document.querySelector('.URUS-SPEED-power');
const fuel_infor_URUS_conten = document.querySelector('.fuel_infor-URUS-conten');
//END

// class DIEU HUONG MENU LV1 , LV2 MODELS LIMITED

const LIMITED = document.querySelector('.LIMITED');
const MODLES_LIMITED = document.querySelector('.MODLES-LIMITED');
const LIMITED_LPI = document.querySelector('#LIMITED-LPI')
const LIMITED_FKP = document.querySelector('#LIMITED-FKP');
const LIMITED_ROADSTER = document.querySelector('#LIMITED-ROADSTER');


//END

//  class hien thong tin xe MODELS LIMITED

const LIMITED_content_empty = document.querySelector('.LIMITED-content-empty');
const LIMITED_content_START = document.querySelector('.LIMITED-content-START');
const LIMITED_SPEED = document.querySelector('.LIMITED-SPEED');
const LIMITED_SPEED_num = document.querySelector('.LIMITED-SPEED-num');
const LIMITED_information = document.querySelector('.LIMITED-information');
const LIMITED_SPEED_power = document.querySelector('.LIMITED-SPEED-power');
const fuel_infor_LIMITED_conten = document.querySelector('.fuel_infor-LIMITED-conten')
//END


// class DIEU HUONG MENU LV1 , LV2 MODELS HURACAN


const HURACAN = document.querySelector('.HURACAN');
const MODLES_HURACÁN = document.querySelector('.MODLES-HURACÁN');
const HURACÁN_STERRATO = document.querySelector('#HURACÁN-STERRATO')
const HURACÁN_TECNICA = document.querySelector('#HURACÁN-TECNICA');
const HURACÁN_STO = document.querySelector('#HURACÁN-STO');
const HURACÁN_EVO_SPYDER = document.querySelector('#HURACÁN-EVO-SPYDER');

//END

//  class hien thong tin xe MODELS HURACAN

const HURACÁN_content_empty = document.querySelector('.HURACÁN-content-empty');
const HURACÁN_content_START = document.querySelector('.HURACÁN-content-START');
const HURACÁN_SPEED = document.querySelector('.HURACÁN-SPEED');
const HURACÁN_SPEED_num = document.querySelector('.HURACÁN-SPEED-num');
const HURACÁN_information = document.querySelector('.HURACÁN-information');
const HURACÁN_SPEED_power = document.querySelector('.HURACÁN-SPEED-power');
var fuel_infor_hurucan_conten = document.querySelector('.fuel_infor-hurucan-conten');


//END




// HAM LAY THONG TIN CAC LOAI XE.........

// ham lay thong tin concept_terzo

function concept_terzo() {


    var CONCEPT_information_content_SPAN = document.querySelector('.CONCEPT-information-content > span');
    var CONCEPT_GALLERY_SPAN = document.querySelector('.CONCEPT-GALLERY-ELEMENT > span');

    CONCEPT_information_content_SPAN.innerHTML = "TERZO MILLENNIO <p>MODEL INFORMATION</p>";
    CONCEPT_GALLERY_SPAN.innerHTML = "VIEW<p>FULL GALLERY</p>"

}

//end

// ham lay thong tin concept_asterion

function concept_asterion() {


    var CONCEPT_information_content_SPAN = document.querySelector('.CONCEPT-information-content > span');
    var CONCEPT_GALLERY_SPAN = document.querySelector('.CONCEPT-GALLERY-ELEMENT > span');

    CONCEPT_information_content_SPAN.innerHTML = "ASTERION <p>MODEL INFORMATION</p>";
    CONCEPT_GALLERY_SPAN.innerHTML = "VIEW<p>FULL GALLERY</p>"

}

//end

// ham lay thong tin concept_estoque

function concept_estoque() {


    var CONCEPT_information_content_SPAN = document.querySelector('.CONCEPT-information-content > span');
    var CONCEPT_GALLERY_SPAN = document.querySelector('.CONCEPT-GALLERY-ELEMENT > span');

    CONCEPT_information_content_SPAN.innerHTML = "ESTOQUE <p>MODEL INFORMATION</p>";
    CONCEPT_GALLERY_SPAN.innerHTML = "VIEW<p>FULL GALLERY</p>"

}

//end

// ham lay thong tin limited_lpi

function limited_lpi() {

    var LIMITED_SPEED_ELEMENT_content_SPAN = document.querySelector('.LIMITED-SPEED > .LIMITED-SPEED-ELEMENT-content > span');
    var LIMITED_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.LIMITED-SPEED-num > .LIMITED-SPEED-ELEMENT-content > span');
    var LIMITED_information_content_SPAN = document.querySelector('.LIMITED-information-content > span');
    var LIMITED_SPEED_power_SPAN = document.querySelector('.LIMITED-SPEED-power > .LIMITED-SPEED-ELEMENT-content > span');



    LIMITED_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>355KM/H</p>";
    LIMITED_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>2.8S</p>"
    LIMITED_information_content_SPAN.innerHTML = "COUNTACH LPI 800-4 <p>MODEL INFORMATION</p>";
    LIMITED_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>814CV/599KM</p>"
    fuel_infor_LIMITED_conten.innerHTML = "Fuel consumption and emission values of Countach LPI 800-4*; Fuel consumption combined: 19,5 l/100km (WLTP); CO2-emissions combined: 440 g/km (WLTP)"
}

//end

// ham lay thong tin limited_fkp

function limited_fkp() {

    var LIMITED_SPEED_ELEMENT_content_SPAN = document.querySelector('.LIMITED-SPEED > .LIMITED-SPEED-ELEMENT-content > span');
    var LIMITED_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.LIMITED-SPEED-num > .LIMITED-SPEED-ELEMENT-content > span');
    var LIMITED_information_content_SPAN = document.querySelector('.LIMITED-information-content > span');
    var LIMITED_SPEED_power_SPAN = document.querySelector('.LIMITED-SPEED-power > .LIMITED-SPEED-ELEMENT-content > span');



    LIMITED_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>>350KM/H</p>";
    LIMITED_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>2.8S</p>"
    LIMITED_information_content_SPAN.innerHTML = "SIÁN FKP 37 <p>MODEL INFORMATION</p>";
    LIMITED_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>819CV/602KM</p>"
    fuel_infor_LIMITED_conten.innerHTML = "Fuel consumption and emission values of Sián*; Fuel consumption combined: 19,2 l/100km (WLTP); CO2-emissions combined: 447 g/km (WLTP)"
}

//end

// ham lay thong tin limited_fkp

function limited_roadster() {

    var LIMITED_SPEED_ELEMENT_content_SPAN = document.querySelector('.LIMITED-SPEED > .LIMITED-SPEED-ELEMENT-content > span');
    var LIMITED_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.LIMITED-SPEED-num > .LIMITED-SPEED-ELEMENT-content > span');
    var LIMITED_information_content_SPAN = document.querySelector('.LIMITED-information-content > span');
    var LIMITED_SPEED_power_SPAN = document.querySelector('.LIMITED-SPEED-power > .LIMITED-SPEED-ELEMENT-content > span');



    LIMITED_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>>350KM/H</p>";
    LIMITED_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>2.9S</p>"
    LIMITED_information_content_SPAN.innerHTML = "SIÁN ROADSTER <p>MODEL INFORMATION</p>";
    LIMITED_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>819CV/602KM</p>"
    fuel_infor_LIMITED_conten.innerHTML = "Fuel consumption and emission values of Sián roadster*; Fuel consumption combined: 18,5 l/100km (WLTP); CO2-emissions combined: 447 g/km (WLTP)"
}

//end

// ham lay thong tin huracan sterrato

function huracan_sterrato() {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-content-START-ELEMENT > a > span');
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_information_content_SPAN = document.querySelector('.HURACÁN-information-content > span');
    var HURACÁN_SPEED_power_SPAN = document.querySelector('.HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span');
    var fuel_infor_hurucan_conten = document.querySelector('.fuel_infor-hurucan-conten');

    HURACÁN_START_ELEMENT_content_SPAN.textContent = "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>260KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.4S</p>"
    HURACÁN_information_content_SPAN.innerHTML = "HURACÁN STERRATO <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>610CV/449KM</p>"
    fuel_infor_hurucan_conten.innerHTML = "Fuel consumption and emission values of Huracán Sterrato*; Fuel consumption combined: 14,9 l/100km (WLTP); CO2-emissions combined: 337 g/km (WLTP)"
}

//end

// ham lay thong tin huracan_tecnica

function huracan_tecnica() {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-content-START-ELEMENT > a > span');
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_information_content_SPAN = document.querySelector('.HURACÁN-information-content > span');
    var HURACÁN_SPEED_power_SPAN = document.querySelector('.HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span');


    HURACÁN_START_ELEMENT_content_SPAN.textContent = "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>325KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.2S</p>"
    HURACÁN_information_content_SPAN.innerHTML = "HURACÁN TECNICA <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>640CV/470KM</p>"
    fuel_infor_hurucan_conten.innerHTML = "Fuel consumption and emission values of Huracán Tecnica*; Fuel consumption combined: 14,5 l/100km (WLTP); CO2-emissions combined: 328 g/km (WLTP)"
}

// end

// ham lay thong tin huracan_sto

function huracan_sto() {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-content-START-ELEMENT > a > span');
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_information_content_SPAN = document.querySelector('.HURACÁN-information-content > span');
    var HURACÁN_SPEED_power_SPAN = document.querySelector('.HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span');


    HURACÁN_START_ELEMENT_content_SPAN.textContent = "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>310KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.0S</p>"
    HURACÁN_information_content_SPAN.innerHTML = "HURACÁN STO <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>640CV/470KM</p>"
    fuel_infor_hurucan_conten.innerHTML = "Fuel consumption and emission values of Huracán STO*; Fuel consumption combined: 13,9 l/100km (WLTP); CO2-emissions combined: 331 g/km (WLTP)"
}

//END

// ham lay thong tin huracan_evo_spyder

function huracan_evo_spyder() {
    var HURACÁN_START_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-content-START-ELEMENT > a > span');
    var HURACÁN_SPEED_ELEMENT_content_SPAN = document.querySelector('.HURACÁN-SPEED > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.HURACÁN-SPEED-num > .HURACÁN-SPEED-ELEMENT-content > span');
    var HURACÁN_information_content_SPAN = document.querySelector('.HURACÁN-information-content > span');
    var HURACÁN_SPEED_power_SPAN = document.querySelector('.HURACÁN-SPEED-power > .HURACÁN-SPEED-ELEMENT-content > span');


    HURACÁN_START_ELEMENT_content_SPAN.textContent = "CREATE YOUR HURACÁN START CONFIGURATION";
    HURACÁN_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>325KM/H</p>";
    HURACÁN_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.1S</p>"
    HURACÁN_information_content_SPAN.innerHTML = "HURACÁN EVO SPYDER <p>MODEL INFORMATION</p>";
    HURACÁN_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>640CV/470KM</p>"
    fuel_infor_hurucan_conten.innerHTML = "Fuel consumption and emission values of Huracán Evo Spyder*; Fuel consumption combined: 14,9 l/100km (WLTP); CO2-emissions combined: 338 g/km (WLTP)"
}

//end

// ham lay thong tin urus_s

function urus_s() {
    var URUS_START_ELEMENT_content_SPAN = document.querySelector('.URUS-content-START-ELEMENT > a > span');
    var URUS_SPEED_ELEMENT_content_SPAN = document.querySelector('.URUS-SPEED > .URUS-SPEED-ELEMENT-content > span');
    var URUS_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.URUS-SPEED-num > .URUS-SPEED-ELEMENT-content > span');
    var URUS_information_content_SPAN = document.querySelector('.URUS-information-content > span');
    var URUS_SPEED_power_SPAN = document.querySelector('.URUS-SPEED-power > .URUS-SPEED-ELEMENT-content > span');


    URUS_START_ELEMENT_content_SPAN.textContent = "CREATE YOUR URUS START CONFIGURATION";
    URUS_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>305KM/H</p>";
    URUS_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.5S</p>"
    URUS_information_content_SPAN.innerHTML = "URUS S <p>MODEL INFORMATION</p>";
    URUS_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>666CV/490KM</p>"
    fuel_infor_URUS_conten.innerHTML = "Fuel consumption and emission values of Urus S*; Fuel consumption combined: 14,1 l/100km (WLTP); CO2-emissions combined: 320 g/km (WLTP)"
}

//end

// ham lay thong tin urus_PERFORMANTE

function urus_PERFORMANTE() {
    var URUS_START_ELEMENT_content_SPAN = document.querySelector('.URUS-content-START-ELEMENT > a > span');
    var URUS_SPEED_ELEMENT_content_SPAN = document.querySelector('.URUS-SPEED > .URUS-SPEED-ELEMENT-content > span');
    var URUS_SPEED_ELEMENT_num_content_SPAN = document.querySelector('.URUS-SPEED-num > .URUS-SPEED-ELEMENT-content > span');
    var URUS_information_content_SPAN = document.querySelector('.URUS-information-content > span');
    var URUS_SPEED_power_SPAN = document.querySelector('.URUS-SPEED-power > .URUS-SPEED-ELEMENT-content > span');


    URUS_START_ELEMENT_content_SPAN.textContent = "CREATE YOUR URUS START CONFIGURATION";
    URUS_SPEED_ELEMENT_content_SPAN.innerHTML = "MAX SPEED <p>306KM/H</p>";
    URUS_SPEED_ELEMENT_num_content_SPAN.innerHTML = "0-100KM/H <p>3.3S</p>"
    URUS_information_content_SPAN.innerHTML = "URUS PERFORMANTE <p>MODEL INFORMATION</p>";
    URUS_SPEED_power_SPAN.innerHTML = "POWER(CV)/POWER(KM) <p>666CV/490KM</p>"
    fuel_infor_URUS_conten.innerHTML = "Fuel consumption and emission values of Urus Performante*; Fuel consumption combined: 14,1 l/100km (WLTP); CO2-emissions combined: 320 g/km (WLTP)"
}

//END



// CAC HAM AN , HIEN CAC LOAI XE..............

// HAM HIEN CONCEPT

function visibility_concept() {

    CONCEPT_information.classList.add('visibility');

    CONCEPT_GALLERY.classList.add('visibility');
    modelElement.classList.add('MODMODELS-element-transformed');


    const CONCEPT_GALLERY_ELEMENT = document.querySelector('.CONCEPT-GALLERY-ELEMENT');
    const CONCEPT_information_content = document.querySelector('.CONCEPT-information-content');

    fuel_infor_CONCEPT_conten.classList.add('opacity')
    CONCEPT_information_content.classList.add('opacity-transform');
    CONCEPT_GALLERY_ELEMENT.classList.add('opacity-transform');
}

//END

// HAM AN CONCEPT

function hidden_concept() {
    CONCEPT_information.classList.remove('visibility');

    CONCEPT_GALLERY.classList.remove('visibility');
    MODLES_CONCEPT.classList.remove('MODLES-CONCEPT-background');
    MODLES_CONCEPT.classList.remove('MODELS_element-CONCEPT-show');

    const CONCEPT_GALLERY_ELEMENT = document.querySelector('.CONCEPT-GALLERY-ELEMENT');
    const CONCEPT_information_content = document.querySelector('.CONCEPT-information-content');


    CONCEPT_information_content.classList.remove('opacity-transform');
    fuel_infor_CONCEPT_conten.classList.remove('opacity')
    CONCEPT_GALLERY_ELEMENT.classList.remove('opacity-transform');
}

//END

// HAM HIEN LIMITED

function visibility_limited() {
    LIMITED_content_empty.classList.add('visibility');
    LIMITED_content_START.classList.add('visibility');
    LIMITED_SPEED.classList.add('visibility');
    LIMITED_information.classList.add('visibility');
    LIMITED_SPEED_num.classList.add('visibility');
    LIMITED_SPEED_power.classList.add('visibility');
    modelElement.classList.add('MODMODELS-element-transformed');

    const LIMITED_content_START_ELEMENT = document.querySelector('.LIMITED-content-START-ELEMENT');
    const LIMITED_SPEED_ELEMENT_content = document.querySelectorAll('.LIMITED-SPEED-ELEMENT-content');
    const LIMITED_information_content = document.querySelector('.LIMITED-information-content');
    LIMITED_SPEED_ELEMENT_content.forEach(a => {
        a.classList.add('opacity')
    })
    LIMITED_content_START_ELEMENT.classList.add('opacity-transform');
    LIMITED_information_content.classList.add('opacity-transform');
    LIMITED_SPEED_num.classList.add('opacity');
    LIMITED_SPEED_power.classList.add('opacity');
    fuel_infor_LIMITED_conten.classList.add('opacity');
}

//END

// HAM AN LIMITED

function hidden_limited() {
    LIMITED_content_empty.classList.remove('visibility');
    LIMITED_content_START.classList.remove('visibility');
    LIMITED_SPEED.classList.remove('visibility');
    LIMITED_information.classList.remove('visibility');
    LIMITED_SPEED_num.classList.remove('visibility');
    LIMITED_SPEED_power.classList.remove('visibility');
    MODLES_LIMITED.classList.remove('MODLES-LIMITED-background');
    MODLES_LIMITED.classList.remove('MODELS_element-LIMITED-show');
    const LIMITED_content_START_ELEMENT = document.querySelector('.LIMITED-content-START-ELEMENT');
    const LIMITED_SPEED_ELEMENT_content = document.querySelectorAll('.LIMITED-SPEED-ELEMENT-content');
    const LIMITED_information_content = document.querySelector('.LIMITED-information-content');
    LIMITED_SPEED_ELEMENT_content.forEach(a => {
        a.classList.remove('opacity')
    })
    LIMITED_content_START_ELEMENT.classList.remove('opacity-transform');
    LIMITED_information_content.classList.remove('opacity-transform');
    LIMITED_SPEED_num.classList.remove('opacity');
    LIMITED_SPEED_power.classList.remove('opacity');
    fuel_infor_LIMITED_conten.classList.remove('opacity');
}

//END

// HAM HIEN URUS

function visibility_urus() {
    URUS_content_empty.classList.add('visibility');
    URUS_content_START.classList.add('visibility');
    URUS_SPEED.classList.add('visibility');
    URUS_information.classList.add('visibility');
    URUS_SPEED_num.classList.add('visibility');
    URUS_SPEED_power.classList.add('visibility');
    modelElement.classList.add('MODMODELS-element-transformed');

    const URUS_content_START_ELEMENT = document.querySelector('.URUS-content-START-ELEMENT');
    const URUS_SPEED_ELEMENT_content = document.querySelectorAll('.URUS-SPEED-ELEMENT-content');
    const URUS_information_content = document.querySelector('.URUS-information-content');
    URUS_SPEED_ELEMENT_content.forEach(a => {
        a.classList.add('opacity')
    })
    URUS_content_START_ELEMENT.classList.add('opacity-transform');
    URUS_information_content.classList.add('opacity-transform');
    URUS_SPEED_num.classList.add('opacity');
    URUS_SPEED_power.classList.add('opacity');
    fuel_infor_URUS_conten.classList.add('opacity');
}

//END

// HAM AN URUS

function hidden_urus() {
    URUS_content_empty.classList.remove('visibility');
    URUS_content_START.classList.remove('visibility');
    URUS_SPEED.classList.remove('visibility');
    URUS_information.classList.remove('visibility');
    URUS_SPEED_num.classList.remove('visibility');
    URUS_SPEED_power.classList.remove('visibility');
    MODLES_URUS.classList.remove('MODLES-URUS-background');
    MODLES_URUS.classList.remove('MODELS_element-URUS-show');
    const URUS_content_START_ELEMENT = document.querySelector('.URUS-content-START-ELEMENT');
    const URUS_SPEED_ELEMENT_content = document.querySelectorAll('.URUS-SPEED-ELEMENT-content');
    const URUS_information_content = document.querySelector('.URUS-information-content');
    URUS_SPEED_ELEMENT_content.forEach(a => {
        a.classList.remove('opacity')
    })
    URUS_content_START_ELEMENT.classList.remove('opacity-transform');
    URUS_information_content.classList.remove('opacity-transform');
    URUS_SPEED_num.classList.remove('opacity');
    URUS_SPEED_power.classList.remove('opacity');
    fuel_infor_URUS_conten.classList.remove('opacity');
}

//END

// ham hien huracan

function visibility_huracan() {
    HURACÁN_content_empty.classList.add('visibility');
    HURACÁN_content_START.classList.add('visibility');
    HURACÁN_SPEED.classList.add('visibility');
    HURACÁN_information.classList.add('visibility');
    HURACÁN_SPEED_num.classList.add('visibility');
    HURACÁN_SPEED_power.classList.add('visibility');
    modelElement.classList.add('MODMODELS-element-transformed');

    const HURACÁN_content_START_ELEMENT = document.querySelector('.HURACÁN-content-START-ELEMENT');
    const HURACÁN_SPEED_ELEMENT_content = document.querySelectorAll('.HURACÁN-SPEED-ELEMENT-content');
    const HURACÁN_information_content = document.querySelector('.HURACÁN-information-content');
    HURACÁN_SPEED_ELEMENT_content.forEach(a => {
        a.classList.add('opacity')
    })
    HURACÁN_content_START_ELEMENT.classList.add('opacity-transform');
    HURACÁN_information_content.classList.add('opacity-transform');
    HURACÁN_SPEED_num.classList.add('opacity');
    HURACÁN_SPEED_power.classList.add('opacity');
    fuel_infor_hurucan_conten.classList.add('opacity')
}

//END

// ham an huracan

function hidden_huracan() {
    HURACÁN_content_empty.classList.remove('visibility');
    HURACÁN_content_START.classList.remove('visibility');
    HURACÁN_SPEED.classList.remove('visibility');
    HURACÁN_information.classList.remove('visibility');
    HURACÁN_SPEED_num.classList.remove('visibility');
    HURACÁN_SPEED_power.classList.remove('visibility');
    MODLES_HURACÁN.classList.remove('MODLES-HURACÁN-background');
    MODLES_HURACÁN.classList.remove('MODELS_element-HURACÁN-show');
    const HURACÁN_content_START_ELEMENT = document.querySelector('.HURACÁN-content-START-ELEMENT');
    const HURACÁN_SPEED_ELEMENT_content = document.querySelectorAll('.HURACÁN-SPEED-ELEMENT-content');
    const HURACÁN_information_content = document.querySelector('.HURACÁN-information-content');
    HURACÁN_SPEED_ELEMENT_content.forEach(a => {
        a.classList.remove('opacity')
    })
    HURACÁN_content_START_ELEMENT.classList.remove('opacity-transform');
    HURACÁN_information_content.classList.remove('opacity-transform');
    HURACÁN_SPEED_num.classList.remove('opacity');
    HURACÁN_SPEED_power.classList.remove('opacity');
    fuel_infor_hurucan_conten.classList.remove('opacity')
}
//end

// ham hien REVUELTO

function visibility_REVUELTO() {
    modelElement.classList.add('MODMODELS-element-transformed');
    MODELS_element_REVUELTO.classList.add('MODELS_element-REVUELTO-show');
    REVUELTO_content_START_ELEMENT.classList.add('opacity-transform');
    REVUELTO_information_content.classList.add('opacity-transform');
    fuel_infor_conten.classList.add('opacity');
    REVUELTO_SPEED.forEach(a => {
        a.classList.add('opacity')
    })

}

//end

// ham an REVUELTO

function hidden_REVUELTO() {
    // modelElement.classList.remove('MODMODELS-element-transformed');
    MODELS_element_REVUELTO.classList.remove('MODELS_element-REVUELTO-show');
    REVUELTO_content_START_ELEMENT.classList.remove('opacity-transform');
    REVUELTO_information_content.classList.remove('opacity-transform');
    fuel_infor_conten.classList.remove('opacity')
}

//end

// KHU VUC EVENT ......................

PRE_OWNED.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.remove('MODMODELS-element-transformed');
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();

})
modelTab.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.add('transformed-MODELS');
    OWNERSHIP_element.classList.remove('transformed-OWNERSHIP');
    MOTOSPORT_element.classList.remove('transformed-MOTOSPORT');
});
STORE.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.remove('transformed-MODELS');
    OWNERSHIP_element.classList.remove('transformed-OWNERSHIP');
    MOTOSPORT_element.classList.remove('transformed-MOTOSPORT');
    modelElement.classList.remove('MODMODELS-element-transformed');
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});
FEEDBACK.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.remove('transformed-MODELS');
    OWNERSHIP_element.classList.remove('transformed-OWNERSHIP');
    MOTOSPORT_element.classList.remove('transformed-MOTOSPORT');
    modelElement.classList.remove('MODMODELS-element-transformed');
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});
BEYOND.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.remove('transformed-MODELS');
    OWNERSHIP_element.classList.remove('transformed-OWNERSHIP');
    MOTOSPORT_element.classList.remove('transformed-MOTOSPORT');
    modelElement.classList.remove('MODMODELS-element-transformed');
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});
OWNERSHIP.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.remove('transformed-MODELS');
    OWNERSHIP_element.classList.add('transformed-OWNERSHIP');
    MOTOSPORT_element.classList.remove('transformed-MOTOSPORT');
    modelElement.classList.remove('MODMODELS-element-transformed');
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});
MOTOSPORT.addEventListener('mouseover', () => {
    MENU_lv2.classList.add('visibility')
    modelElement.classList.remove('transformed-MODELS');
    OWNERSHIP_element.classList.remove('transformed-OWNERSHIP');
    MOTOSPORT_element.classList.add('transformed-MOTOSPORT');
    modelElement.classList.add('MODMODELS-element-transformed');
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});

modelElement.addEventListener('mouseleave', (event) => {
    const targetRect = modelElement.getBoundingClientRect();
    const mouseY = event.clientY;
    if (mouseY > targetRect.bottom) {
        modelElement.classList.remove('transformed-MODELS');
        modelElement.classList.remove('MODMODELS-element-transformed');
        hidden_REVUELTO();
        MODLES_HURACÁN.classList.remove('MODELS_element-HURACÁN-show');
        MODLES_HURACÁN.classList.remove('MODLES-HURACÁN-background');
        MODLES_HURACÁN.style.backgroundImage = "";
        MODLES_URUS.classList.remove('MODELS_element-URUS-show');
        MODLES_URUS.classList.remove('MODLES-URUS-background');
        MODLES_URUS.style.backgroundImage = "";
        MODLES_LIMITED.classList.remove('MODELS_element-LIMITED-show');
        MODLES_LIMITED.classList.remove('MODLES-LIMITED-background');
        MODLES_LIMITED.style.backgroundImage = "";
        MODLES_CONCEPT.classList.remove('MODELS_element-CONCEPT-show');
        MODLES_CONCEPT.classList.remove('MODLES-CONCEPT-background');
        MODLES_CONCEPT.style.backgroundImage = "";
        MENU_lv2.classList.remove('visibility');

    }
});
OWNERSHIP_element.addEventListener('mouseleave', (event) => {
    const targetRect = OWNERSHIP_element.getBoundingClientRect();
    const mouseY = event.clientY;
    if (mouseY > targetRect.bottom) {
        OWNERSHIP_element.classList.remove('transformed-OWNERSHIP');
        REVUELTO_content_START_ELEMENT.classList.remove('opacity-transform');
        REVUELTO_information_content.classList.remove('opacity-transform');
        MENU_lv2.classList.remove('visibility');

    }
});
MOTOSPORT_element.addEventListener('mouseleave', (event) => {
    const targetRect = MOTOSPORT_element.getBoundingClientRect();
    const mouseY = event.clientY;
    if (mouseY > targetRect.bottom) {
        MOTOSPORT_element.classList.remove('transformed-MOTOSPORT');

        REVUELTO_content_START_ELEMENT.classList.remove('opacity-transform');
        REVUELTO_information_content.classList.remove('opacity-transform');
        MENU_lv2.classList.remove('visibility');
        hidden_huracan();
        hidden_urus();
        hidden_limited();
        hidden_concept();
    }
});

REVUELTO.addEventListener('mouseover', () => {
    visibility_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});

// event huracan element


HURACAN.addEventListener('mouseover', () => {
    hidden_huracan();
    MODLES_HURACÁN.classList.add('MODELS_element-HURACÁN-show');
    MODLES_HURACÁN.classList.remove('MODLES-HURACÁN-background');

    MODLES_HURACÁN.style.backgroundImage = "";
    hidden_REVUELTO();
    hidden_urus();
    hidden_limited();
    hidden_concept();
});

HURACÁN_STERRATO.addEventListener('mouseover', () => {
    visibility_huracan();
    hidden_REVUELTO();
    hidden_urus();
    huracan_sterrato();
    MODLES_HURACÁN.classList.add('MODLES-HURACÁN-background');
    MODLES_HURACÁN.style.backgroundImage = "url('img/huracan-sterrato/background.png')"
});

HURACÁN_TECNICA.addEventListener('mouseover', () => {
    visibility_huracan();
    hidden_REVUELTO();
    huracan_tecnica();
    MODLES_HURACÁN.classList.add('MODLES-HURACÁN-background');
    MODLES_HURACÁN.style.backgroundImage = "url('img/huracan-tecnica/background.png')"
})
HURACÁN_STO.addEventListener('mouseover', () => {
    visibility_huracan();
    hidden_REVUELTO();
    huracan_sto();
    MODLES_HURACÁN.classList.add('MODLES-HURACÁN-background');
    MODLES_HURACÁN.style.backgroundImage = "url('img/huracan-sto/background.png')"
})
HURACÁN_EVO_SPYDER.addEventListener('mouseover', () => {
    visibility_huracan();
    hidden_REVUELTO();
    huracan_evo_spyder();
    MODLES_HURACÁN.classList.add('MODLES-HURACÁN-background');
    MODLES_HURACÁN.style.backgroundImage = "url('img/huracan-evo-spyder/background.png')"
})
//end


// event urus element


URUS.addEventListener('mouseover', () => {
    hidden_urus();
    MODLES_URUS.classList.add('MODELS_element-URUS-show');
    MODLES_URUS.classList.remove('MODLES-URUS-background');
    MODLES_URUS.style.backgroundImage = "";
    hidden_REVUELTO();
    hidden_huracan();
    hidden_limited();
    hidden_concept();
});

URUS_S.addEventListener('mouseover', () => {
    visibility_urus();
    urus_s();
    MODLES_URUS.classList.add('MODLES-URUS-background');
    MODLES_URUS.style.backgroundImage = "url('img/urus-s/background.png')"
});

URUS_PERFORMANTE.addEventListener('mouseover', () => {
    visibility_urus();
    urus_PERFORMANTE();
    MODLES_URUS.classList.add('MODLES-URUS-background');
    MODLES_URUS.style.backgroundImage = "url('img/urus-performante/background.png')"
})

//end

// event LIMITED element


LIMITED.addEventListener('mouseover', () => {
    hidden_limited();
    MODLES_LIMITED.classList.add('MODELS_element-LIMITED-show');
    MODLES_LIMITED.classList.remove('MODLES-LIMITED-background');
    MODLES_LIMITED.style.backgroundImage = "";
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_concept();
});

LIMITED_LPI.addEventListener('mouseover', () => {
    visibility_limited();
    limited_lpi()
    MODLES_LIMITED.classList.add('MODLES-LIMITED-background');
    MODLES_LIMITED.style.backgroundImage = "url('img/limited-lpi/background.png')"
});

LIMITED_FKP.addEventListener('mouseover', () => {
    visibility_limited();
    limited_fkp();
    MODLES_LIMITED.classList.add('MODLES-LIMITED-background');
    MODLES_LIMITED.style.backgroundImage = "url('img/limited-fkp/background.png')"
});
LIMITED_ROADSTER.addEventListener('mouseover', () => {
    visibility_limited();
    limited_roadster();
    MODLES_LIMITED.classList.add('MODLES-LIMITED-background');
    MODLES_LIMITED.style.backgroundImage = "url('img/limited-roadster/background.png')"
});

//end

// event CONCEPT element
CONCEPT.addEventListener('mouseover', () => {
    hidden_concept();
    MODLES_CONCEPT.classList.add('MODELS_element-CONCEPT-show');
    MODLES_CONCEPT.classList.remove('MODLES-CONCEPT-background');
    MODLES_CONCEPT.style.backgroundImage = "";
    hidden_REVUELTO();
    hidden_huracan();
    hidden_urus();
    hidden_limited();
});

CONCEPT_TERZO_MILLENNIO.addEventListener('mouseover', () => {
    visibility_concept();
    concept_terzo();
    MODLES_CONCEPT.classList.add('MODLES-CONCEPT-background');
    MODLES_CONCEPT.style.backgroundImage = "url('img/concept-terzo/background.png')"
})
CONCEPT_ASTERION.addEventListener('mouseover', () => {
    visibility_concept();
    concept_asterion();
    MODLES_CONCEPT.classList.add('MODLES-CONCEPT-background');
    MODLES_CONCEPT.style.backgroundImage = "url('img/concept-asterion/background.png')"
})
CONCEPT_ESTOQUE.addEventListener('mouseover', () => {
    visibility_concept();
    concept_estoque();
    MODLES_CONCEPT.classList.add('MODLES-CONCEPT-background');
    MODLES_CONCEPT.style.backgroundImage = "url('img/concept-estoque/background.png')"
})

