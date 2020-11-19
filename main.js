// contact toggle
const contactSection = document.querySelector('.contact-section');

function toggleContact() {
    if (contactSection.style.display === "none") {
        contactSection.style.display = "block";
    }
    else {
        contactSection.style.display = "none";
    }
}

// menu toggle functionality

// nav buttons
const oNasBtn = document.querySelector('#nav-o-nas');
const pompyBtn = document.querySelector('#nav-pompy');
const kolektoryBtn = document.querySelector('#nav-kolektory');
const rekuperacjaBtn = document.querySelector('#nav-rekuperacja');
const ogrzewanieBtn = document.querySelector('#nav-ogrzewanie');

// sections
const oNasSection = document.querySelector('.o-nas');
const pompySection = document.querySelector('.pompy');
const kolektorySection = document.querySelector('.kolektory');
const rekuperacjaSection = document.querySelector('.rekuperacja');
const ogrzewanieSection = document.querySelector('.ogrzewanie');
const nibeBanner = document.querySelector('.nibe');

// event listeners
oNasBtn.addEventListener("click", toggleONas);
pompyBtn.addEventListener("click", togglePompy);
kolektoryBtn.addEventListener("click", toggleKolektory);
rekuperacjaBtn.addEventListener("click", toggleRekuperacja);
ogrzewanieBtn.addEventListener("click", toggleOgrzewanie);

// toggle functions
function toggleONas() {
    if (oNasSection.style.display === "none") {
        oNasSection.style.display = "block";
        pompySection.style.display = "none";
        kolektorySection.style.display = "none"
        rekuperacjaSection.style.display = "none";
        ogrzewanieSection.style.display = "none";
        nibeBanner.style.display="block";
    }

}
function togglePompy() {
    if (pompySection.style.display === "none") {
        pompySection.style.display = "block";
        oNasSection.style.display = "none";
        kolektorySection.style.display = "none"
        rekuperacjaSection.style.display = "none";
        ogrzewanieSection.style.display = "none";
        nibeBanner.style.display="none";
    }

}

function toggleKolektory() {
    if (kolektorySection.style.display === "none") {
        oNasSection.style.display = "none";
        pompySection.style.display = "none";
        kolektorySection.style.display = "block"
        rekuperacjaSection.style.display = "none";
        ogrzewanieSection.style.display = "none";
        nibeBanner.style.display="none";
    }

}
function toggleRekuperacja() {
    if (rekuperacjaSection.style.display === "none") {
        oNasSection.style.display = "none";
        pompySection.style.display = "none";
        kolektorySection.style.display = "none"
        rekuperacjaSection.style.display = "block";
        ogrzewanieSection.style.display = "none";
        nibeBanner.style.display="none";
    }

}
function toggleOgrzewanie() {
    if (ogrzewanieSection.style.display === "none") {
        oNasSection.style.display = "none";
        pompySection.style.display = "none";
        kolektorySection.style.display = "none"
        rekuperacjaSection.style.display = "none";
        ogrzewanieSection.style.display = "block";
        nibeBanner.style.display="none";
    }

}




