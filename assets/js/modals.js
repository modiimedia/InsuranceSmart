let cfm_container = document.querySelector("#contact-form-modal")
let cfm_name = document.querySelector("#cfm_name")
let cfm_email = document.querySelector("#cfm_email")
let cfm_phone = document.querySelector("#cfm_phone")
let cfm_zip = document.querySelector("#cfm_zip")
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
        if (params.modal === "on"){
            params.name = params.name.replace("+", " ");
            params.email = params.email.replace("%40", "@");
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
    cfm_name.value = object.name
    cfm_email.value = object.email
    cfm_phone.value = object.phone
}

function closeContactFormModal(){
    html_element.classList.remove("no-scroll")
    window.location.href = window.location.pathname
}