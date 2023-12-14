function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



let aircrafts = [
    {
        brand: "Airbus",
        model: "A380-900"
    },
    {
        brand: "Boeing",
        model: "B747-8i"
    },
    {
        brand: "Airbus",
        model: "A350-1000"
    }
];

function initialize() {
    const AIRCRAFT_FORM = document.getElementById("aircraft-form");
    AIRCRAFT_FORM.addEventListener("submit", addAircraft);

    showAircraft();
}

function addAircraft(event) {
    // console.log("An aircraft was added");

    event.preventDefault();

    const BRAND = event.target.brand.value;
    const MODEL = event.target.model.value;

    if(BRAND == ""){
        let BRAND_ERROR = document.getElementById("brand-error");
        BRAND_ERROR.style.visibility = "visible";
    }
    
    if(MODEL == ""){
        console.log("Model Required");
    }

    aircrafts.push({
        brand: BRAND,
        model: MODEL
    });

    showAircraft();
}

function showAircraft() {
    const AIRCRAFT_LIST = document.getElementById("aircraft-list");

    let allAircraft = "";

    for (let i = 0; i < aircrafts.length; i++) {
        allAircraft += `<li>${aircrafts[i].brand} - ${aircrafts[i].model}
                        <button onclick="deleteAircraft(${i})">Delete</button>
                        <button onclick="updateAircraft(${i})">Update</button></li>`;
    }

    AIRCRAFT_LIST.innerHTML = allAircraft;
}


function updateAircraft(aircraftId) {
    const updatedBrand = prompt("Enter updated brand:");
    const updatedModel = prompt("Enter updated model:");

    if (updatedBrand !== null && updatedModel !== null) {
        aircrafts[aircraftId].brand = updatedBrand;
        aircrafts[aircraftId].model = updatedModel;
        showAircraft();
        console.log("Aircraft information updated");
    }
}


function deleteAircraft(aircraftId){
    console.log("An Aircraft was deleted from the list");

    aircrafts.splice(aircraftId, 1);

    showAircraft();
}

initialize();