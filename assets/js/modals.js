let cfm_container = document.querySelector("#contact-form-modal")
let cfm_name = document.querySelector("#cfm_name")
let cfm_email = document.querySelector("#cfm_email")
let cfm_phone = document.querySelector("#cfm_phone")
let cfm_zipcode = document.querySelector("#cfm_zipcode")
let cfm_birth_month = document.querySelector("#cfm_birth_month")
let cfm_birth_day = document.querySelector("#cfm_birth_day");
let cfm_birth_year = document.querySelector("#cfm_birth_year")
let cfm_closer = document.querySelectorAll(".cfm_closer")
let html_element = document.querySelector("html");

for (let i = 0; i < cfm_closer.length; i++){
    cfm_closer[i].addEventListener("click", function(){
        closeContactFormModal()
    })
}

checkForParams();

function checkForParams(){
    let active = window.location.search
    if (active) {
        let params = getUrlParams();
        console.log(params)
        if (params.modal === "on"){
            if (params.name) {
                params.name.replace("+", " ");
            }
            if (params.email) {
                params.email = params.email.replace("%40", "@");
            }
            if (params.insurance){
                let insurance = params.insurance.split(',');
                params.insurance = insurance
            }
            openContactFormModal(params)
        }
    }
}

function getUrlParams() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function openContactFormModal(object){
    console.log(object)
    html_element.classList.add("no-scroll")
    cfm_container.classList.add("is-open")
    if(object.name){
        cfm_name.value = object.name        
    }
    if(object.email){
        cfm_email.value = object.email
    }
    if(object.phone){
        cfm_phone.value = object.phone
    }
    if(object.zipcode){
        cfm_zipcode.value = object.zipcode
    }
    if(object.insurance){
        for(let i = 0; i < object.insurance.length; i++){
            let insuranceType = object.insurance[i];
            let id = `cfm_check_${insuranceType}_field`
            if(document.getElementById(id)){
                checkCheckbox(id)
            } else {
                console.log(`element with id "${id}" doesn't exist`)
            }
        }
    }
}

function checkCheckbox(id){
    document.getElementById(id).checked = true
}

function closeContactFormModal(){
    html_element.classList.remove("no-scroll")
    window.location.href = window.location.pathname
}