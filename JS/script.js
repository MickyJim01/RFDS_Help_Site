const ms_button = document.getElementById("ms_access");
const ms_dropdown = document.getElementById("drop_msaccess");
const re_button = document.getElementById("re_express");
const re_dropdown = document.getElementById("re_drop");

// when MS button is clicked, MS drop down appears
ms_button.addEventListener("click", function () {
    ms_dropdown.classList.toggle("show");
    ms_button.classList.toggle("active_nav_button");
});

// When RE button is clicked, RE dropdown appears
re_button.addEventListener("click", function () {
    re_dropdown.classList.toggle("show");
    re_button.classList.toggle("active_nav_button");
});

// maybe will be able to change so that if you click outside the menu then the drop down will close
// button.addEventListener("blur", function () {
//     dropdown.classList.remove("show");
// });
