/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================
   MOBILE VALIDATION
========================= */

const mobileInput =
    document.getElementById("mobile");


mobileInput.addEventListener(
    "input",
    function () {

        this.value =
            this.value.replace(/\D/g, "");

    }
);


/* =========================
   FORM VALIDATION
========================= */

const enquiryForm =
    document.getElementById("enquiryForm");


enquiryForm.addEventListener(
    "submit",
    function (event) {

        const mobile =
            document.getElementById("mobile").value;

        if (mobile.length !== 10) {

            event.preventDefault();

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;

        }

    }
);


/* =========================
   INSTAGRAM
========================= */

/*
    Add the actual Instagram URL here.

    Example:

    const instagramURL =
    "https://www.instagram.com/pixelfilms";
*/

const instagramURL = "";


const instagramLink =
    document.getElementById("instagramLink");

const footerInstagram =
    document.getElementById("footerInstagram");


function openInstagram(event) {

    event.preventDefault();

    if (instagramURL !== "") {

        window.open(
            instagramURL,
            "_blank",
            "noopener,noreferrer"
        );

    } else {

        alert(
            "PIXEL FILMS Instagram link will be added soon."
        );

    }

}


instagramLink.addEventListener(
    "click",
    openInstagram
);


footerInstagram.addEventListener(
    "click",
    openInstagram
);