var menuToggle;
var homeSection;
var aboutSection;
var servicesSection;
var pricingSection;
var contactSection;
var allSections = {};

function afterLoad() {
    menuToggle = document.getElementById("menuToggle");
    homeSection = document.getElementById("home");
    aboutSection = document.getElementById("about");
    servicesSection = document.getElementById("services");
    pricingSection = document.getElementById("pricing");
    contactSection = document.getElementById("contact");

    allSections = {
        "home": homeSection,
        "about": aboutSection,
        "services": servicesSection,
        "pricing": pricingSection,
        "contact": contactSection
    };

    console.log("Navigation successfully loaded.");

    navigateFromHash();
}

function navigate(sectionId) {
    closeNavigation()

    Object.keys(allSections).forEach(section => {
        allSections[section].style.display = "none";
    });

    if (Object.keys(allSections).includes(sectionId)) {
        allSections[sectionId].style.display = "block";
    } else {
        homeSection.style.display = "block";
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    window.location.hash = sectionId;
}

function closeNavigation() {
    menuToggle.checked = false;
}

function navigateFromHash() {
    let hash = window.location.hash;
    if (hash != "") hash = hash.slice(1);
    if (Object.keys(allSections).includes(hash)) {
        homeSection.style.display = "none";
        allSections[hash].style.display = "block";
    } else {
        homeSection.style.display = "block";
    }
}

window.onpopstate = function(event)
{
    navigateFromHash();
};

window.onhashchange = function(event)
{
    navigateFromHash();
};
